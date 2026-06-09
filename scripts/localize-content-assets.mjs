#!/usr/bin/env node

import { mkdir, readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDir, "..")
const contentRoot = path.join(projectRoot, "src", "content")
const staticAssetRoot = path.join(projectRoot, "static", "content-assets")
const publicAssetRoot = "/content-assets"
const contentfulAssetHost = "images.ctfassets.net"
const contentfulAssetUrlPattern =
  /(?:(?:https:)?\/\/)images\.ctfassets\.net\/[^\s"')}>]+/g

const main = async () => {
  const mdxFiles = await findMdxFiles(contentRoot)
  const downloadedAssets = new Map()
  let replacedReferences = 0

  for (const mdxFile of mdxFiles) {
    const source = await readFile(mdxFile, "utf8")
    let changed = false

    const updated = await replaceAsync(
      source,
      contentfulAssetUrlPattern,
      async rawUrl => {
        const assetPath = await localizeAsset(rawUrl, downloadedAssets)
        changed = true
        replacedReferences += 1
        return assetPath
      },
    )

    if (changed) {
      await writeFile(mdxFile, updated)
    }
  }

  console.log(
    `Localized ${downloadedAssets.size} assets across ${replacedReferences} references.`,
  )
}

const findMdxFiles = async directory => {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async entry => {
      const entryPath = path.join(directory, entry.name)
      if (entry.isDirectory()) return findMdxFiles(entryPath)
      if (entry.isFile() && entry.name.endsWith(".mdx")) return [entryPath]
      return []
    }),
  )

  return files.flat().sort()
}

const replaceAsync = async (source, pattern, replacement) => {
  const matches = Array.from(source.matchAll(pattern))
  if (matches.length === 0) return source

  let cursor = 0
  const chunks = []

  for (const match of matches) {
    const rawMatch = match[0]
    const index = match.index ?? 0

    chunks.push(source.slice(cursor, index))
    chunks.push(await replacement(rawMatch))
    cursor = index + rawMatch.length
  }

  chunks.push(source.slice(cursor))
  return chunks.join("")
}

const localizeAsset = async (rawUrl, downloadedAssets) => {
  const assetUrl = normalizeAssetUrl(rawUrl)
  const existingAsset = downloadedAssets.get(assetUrl.href)
  if (existingAsset) return existingAsset.publicPath

  const assetPath = assetPathFromUrl(assetUrl)
  await mkdir(path.dirname(assetPath.filePath), { recursive: true })

  const response = await fetch(assetUrl)
  if (!response.ok) {
    throw new Error(
      `Failed to download ${assetUrl.href}: ${response.status} ${response.statusText}`,
    )
  }

  const buffer = Buffer.from(await response.arrayBuffer())
  await writeFile(assetPath.filePath, buffer)
  downloadedAssets.set(assetUrl.href, assetPath)

  return assetPath.publicPath
}

const normalizeAssetUrl = rawUrl => {
  const normalizedUrl = rawUrl.startsWith("//") ? `https:${rawUrl}` : rawUrl
  const url = new URL(normalizedUrl)

  if (url.protocol !== "https:" || url.hostname !== contentfulAssetHost) {
    throw new Error(`Unsupported asset URL: ${rawUrl}`)
  }

  return url
}

const assetPathFromUrl = assetUrl => {
  const [, , assetId, assetHash, fileName] = assetUrl.pathname.split("/")

  if (!assetId || !assetHash || !fileName) {
    throw new Error(`Unexpected Contentful asset path: ${assetUrl.href}`)
  }

  const safeFileName = sanitizePathSegment(decodeURIComponent(fileName))
  const relativePath = path.join("contentful", assetId, safeFileName)

  return {
    filePath: path.join(staticAssetRoot, relativePath),
    publicPath: `${publicAssetRoot}/${relativePath.replaceAll(path.sep, "/")}`,
  }
}

const sanitizePathSegment = value => {
  const segment = String(value)
    .normalize("NFKC")
    .replace(/[\\/:*?"<>|#%{}^~[\]`]+/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")

  return segment || "asset"
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
