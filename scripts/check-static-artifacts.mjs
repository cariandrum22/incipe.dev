#!/usr/bin/env node

import { execFileSync } from "node:child_process"
import { readFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDir, "..")
const defaultOutputDir = process.env["STATIC_ARTIFACTS_OUTPUT_DIR"] ?? "dist"
const siteUrl = process.env["SITE_URL"] ?? "https://incipe.dev"
const sitemapIndexPath = "/sitemap-index.xml"
const sitemapPath = "/sitemap-0.xml"
const robotsPath = "/robots.txt"

const main = async () => {
  const options = parseArguments(process.argv.slice(2))
  const outputRoot = path.resolve(
    projectRoot,
    options.outputDir ?? defaultOutputDir,
  )
  const artifacts = await readArtifacts(outputRoot)
  const errors = [
    ...artifacts.errors,
    ...validateRobotsTxt(artifacts.files.get(robotsPath) ?? ""),
    ...validateSitemapIndex(artifacts.files.get(sitemapIndexPath) ?? ""),
    ...validateSitemap(artifacts.files.get(sitemapPath) ?? ""),
  ]

  if (errors.length > 0) {
    printErrors(errors)
    return
  }

  console.log("Static artifacts are valid.")
}

const parseArguments = args => {
  const options = {
    outputDir: undefined,
  }

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index]

    if (argument === "--output-dir") {
      options.outputDir = args[index + 1]
      if (!options.outputDir || options.outputDir.startsWith("--")) {
        throw new Error("--output-dir requires a value")
      }
      index += 1
      continue
    }

    if (argument?.startsWith("--output-dir=")) {
      options.outputDir = argument.slice("--output-dir=".length)
      if (!options.outputDir) {
        throw new Error("--output-dir requires a value")
      }
      continue
    }

    throw new Error(`Unknown argument: ${argument}`)
  }

  return options
}

const readArtifacts = async outputRoot => {
  const files = new Map()
  const errors = []

  await Promise.all(
    [robotsPath, sitemapIndexPath, sitemapPath].map(async artifactPath => {
      const filePath = path.join(outputRoot, artifactPath)

      try {
        files.set(artifactPath, await readFile(filePath, "utf8"))
      } catch (error) {
        errors.push(
          `Missing static artifact ${artifactPath}: ${path.relative(
            projectRoot,
            filePath,
          )} (${error.message})`,
        )
      }
    }),
  )

  return { errors, files }
}

const validateRobotsTxt = source => {
  if (!source) return []

  const expectedLines = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${absoluteUrl(sitemapIndexPath)}`,
    `Host: ${siteUrl}`,
  ]

  return expectedLines
    .filter(line => !source.split("\n").includes(line))
    .map(line => `robots.txt is missing line: ${line}`)
}

const validateSitemapIndex = source => {
  if (!source) return []

  const locs = extractLocs(source)
  const expectedLoc = absoluteUrl(sitemapPath)

  if (locs.length === 1 && locs[0] === expectedLoc) return []

  return [
    `sitemap-index.xml must contain only ${expectedLoc}; found ${JSON.stringify(
      locs,
    )}`,
  ]
}

const validateSitemap = source => {
  if (!source) return []

  const expectedUrls = listExpectedSitemapUrls()
  const actualUrls = extractLocs(source)
  const errors = []

  if (actualUrls.includes(absoluteUrl("/404/"))) {
    errors.push("sitemap-0.xml must not include /404/")
  }

  if (actualUrls.includes(absoluteUrl("/404.html"))) {
    errors.push("sitemap-0.xml must not include /404.html")
  }

  const missingUrls = difference(expectedUrls, actualUrls)
  const extraUrls = difference(actualUrls, expectedUrls)

  if (missingUrls.length > 0) {
    errors.push(
      `sitemap-0.xml is missing URLs: ${JSON.stringify(missingUrls.slice(0, 10))}`,
    )
  }

  if (extraUrls.length > 0) {
    errors.push(
      `sitemap-0.xml has unexpected URLs: ${JSON.stringify(extraUrls.slice(0, 10))}`,
    )
  }

  return errors
}

const listExpectedSitemapUrls = () =>
  execFileSync(
    process.execPath,
    [path.join(scriptDir, "check-routes.mjs"), "--list"],
    {
      encoding: "utf8",
    },
  )
    .trim()
    .split("\n")
    .filter(Boolean)
    .filter(route => route !== "/404/" && route !== "/404.html")
    .map(route => absoluteUrl(route))
    .sort()

const extractLocs = source =>
  Array.from(source.matchAll(/<loc>(?<loc>[\s\S]*?)<\/loc>/gu))
    .map(match => unescapeXml(match.groups?.["loc"] ?? "").trim())
    .sort()

const absoluteUrl = pathname => new URL(pathname, `${siteUrl}/`).href

const unescapeXml = value =>
  value
    .replaceAll("&apos;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&gt;", ">")
    .replaceAll("&lt;", "<")
    .replaceAll("&amp;", "&")

const difference = (left, right) => {
  const remaining = new Map()

  for (const value of right) {
    remaining.set(value, (remaining.get(value) ?? 0) + 1)
  }

  return left.filter(value => {
    const count = remaining.get(value) ?? 0

    if (count <= 0) return true

    remaining.set(value, count - 1)
    return false
  })
}

const printErrors = errors => {
  console.error(errors.map(error => `- ${error}`).join("\n"))
  process.exitCode = 1
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
