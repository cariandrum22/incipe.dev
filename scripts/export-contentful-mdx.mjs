#!/usr/bin/env node

import { mkdir, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"
import dotenv from "dotenv"

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDir, "..")
const nodeEnv = process.env["NODE_ENV"] ?? "production"

dotenv.config({
  path: path.join(projectRoot, `.env.${nodeEnv}.local`),
  quiet: true,
})
dotenv.config({
  path: path.join(projectRoot, ".env.local"),
  override: false,
  quiet: true,
})

const outputRoot = path.resolve(
  projectRoot,
  process.env["CONTENTFUL_MDX_OUTPUT_DIR"] ?? "src/content",
)
const clean = process.argv.includes("--clean")

const requireEnvironmentVariable = name => {
  const value = process.env[name]
  if (value) return value
  throw new Error(`${name} is required to export Contentful content.`)
}

const spaceId = requireEnvironmentVariable("CONTENTFUL_SPACE_ID")
const accessToken = requireEnvironmentVariable("CONTENTFUL_ACCESS_TOKEN")
const environment = process.env["CONTENTFUL_ENVIRONMENT"] ?? "master"
const host =
  process.env["CONTENTFUL_HOST"] ??
  (nodeEnv === "production" ? "cdn.contentful.com" : "preview.contentful.com")
const postContentType = process.env["CONTENTFUL_POST_CONTENT_TYPE"] ?? "post"
const pageContentType = process.env["CONTENTFUL_PAGE_CONTENT_TYPE"] ?? "page"

const contentfulBaseUrl = new URL(
  `https://${host}/spaces/${spaceId}/environments/${environment}/`,
)

const contentfulUrl = pathname => new URL(pathname, contentfulBaseUrl)

const fetchContentfulJson = async url => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (response.ok) return response.json()

  const message = await response.text()
  throw new Error(
    `Contentful request failed with ${response.status} ${response.statusText}: ${message}`,
  )
}

const fetchEntries = async ({ contentType, order }) => {
  const limit = 1000
  const items = []
  const includedEntries = []
  const includedAssets = []
  let skip = 0
  let total = Number.POSITIVE_INFINITY

  while (skip < total) {
    const url = contentfulUrl("entries")
    url.searchParams.set("content_type", contentType)
    url.searchParams.set("include", "2")
    url.searchParams.set("limit", String(limit))
    url.searchParams.set("skip", String(skip))
    if (order) url.searchParams.set("order", order)

    const data = await fetchContentfulJson(url)
    items.push(...(data.items ?? []))
    includedEntries.push(...(data.includes?.Entry ?? []))
    includedAssets.push(...(data.includes?.Asset ?? []))

    total = data.total ?? items.length
    skip += limit
  }

  return {
    items,
    entriesById: createContentfulMap([...items, ...includedEntries]),
    assetsById: createContentfulMap(includedAssets),
  }
}

const createContentfulMap = records =>
  records.reduce((map, record) => {
    const id = record?.sys?.id
    if (id) map.set(id, record)
    return map
  }, new Map())

const linkedRecord = (value, recordsById) => {
  const id = value?.sys?.id
  if (!id) return undefined
  return recordsById.get(id)
}

const linkedRecords = (values, recordsById) => {
  if (!Array.isArray(values)) return []
  return values
    .map(value => linkedRecord(value, recordsById))
    .filter(value => value !== undefined)
}

const imageFromAsset = asset => {
  const fields = asset?.fields
  const file = fields?.file
  const url = file?.url
  if (!url) return undefined

  const image = file.details?.image

  return compactObject({
    title: fields.title,
    description: fields.description,
    url: absoluteAssetUrl(url),
    contentType: file.contentType,
    width: image?.width,
    height: image?.height,
  })
}

const absoluteAssetUrl = url => (url.startsWith("//") ? `https:${url}` : url)

const authorFromEntry = (entry, assetsById) => {
  const fields = entry?.fields
  if (!fields) return undefined

  return compactObject({
    identity: fields.identity,
    name: fields.name,
    emailAddress: fields.emailAddress,
    profile: fields.profile,
    picture: imageFromAsset(linkedRecord(fields.picture, assetsById)),
  })
}

const postFromEntry = (entry, context) => {
  const fields = entry.fields ?? {}
  const slug = fields.slug ?? slugify(fields.title ?? entry.sys.id)
  const authors = linkedRecords(fields.authors, context.entriesById)
    .map(author => authorFromEntry(author, context.assetsById))
    .filter(author => author !== undefined)

  return {
    fileName: `${sanitizePathSegment(slug)}.mdx`,
    frontmatter: compactObject({
      title: fields.title,
      slug,
      description: fields.description,
      publishedOn: fields.publishedOn,
      tags: fields.tags,
      authors,
      heroImage: imageFromAsset(
        linkedRecord(fields.heroImage, context.assetsById),
      ),
      contentful: {
        entryId: entry.sys.id,
        contentType: postContentType,
        updatedAt: entry.sys.updatedAt,
      },
    }),
    body: fields.body ?? "",
  }
}

const pageFromEntry = entry => {
  const fields = entry.fields ?? {}
  const slug = slugify(fields.title ?? entry.sys.id)

  return {
    fileName: `${sanitizePathSegment(slug)}.mdx`,
    frontmatter: compactObject({
      title: fields.title,
      slug,
      contentful: {
        entryId: entry.sys.id,
        contentType: pageContentType,
        updatedAt: entry.sys.updatedAt,
      },
    }),
    body: fields.body ?? "",
  }
}

const compactObject = value =>
  Object.fromEntries(
    Object.entries(value).filter(([, fieldValue]) => fieldValue != null),
  )

const slugify = value =>
  String(value)
    .normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "")

const sanitizePathSegment = value => {
  const segment = String(value)
    .normalize("NFKC")
    .replace(/[\\/:*?"<>|#%{}^~[\]`]+/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")

  return segment || "untitled"
}

const mdxDocument = ({ frontmatter, body }) =>
  `---\n${frontmatterEntries(frontmatter).join("\n")}\n---\n\n${normalizeBody(
    body,
  )}\n`

const frontmatterEntries = frontmatter =>
  Object.entries(frontmatter).map(
    ([key, value]) => `${key}: ${JSON.stringify(value)}`,
  )

const normalizeBody = body => String(body).replace(/\r\n/g, "\n").trim()

const resetOutputDirectories = async directories => {
  await Promise.all(
    directories.map(async directory => {
      await rm(path.join(outputRoot, directory), {
        force: true,
        recursive: true,
      })
      await mkdir(path.join(outputRoot, directory), { recursive: true })
    }),
  )
}

const writeDocuments = async (directory, documents) => {
  const outputDirectory = path.join(outputRoot, directory)
  await mkdir(outputDirectory, { recursive: true })
  assertUniqueFileNames(directory, documents)

  await Promise.all(
    documents.map(document =>
      writeFile(
        path.join(outputDirectory, document.fileName),
        mdxDocument(document),
      ),
    ),
  )

  return documents.map(document =>
    path.relative(projectRoot, path.join(outputDirectory, document.fileName)),
  )
}

const assertUniqueFileNames = (directory, documents) => {
  const seen = new Set()

  for (const document of documents) {
    if (seen.has(document.fileName)) {
      throw new Error(
        `Duplicate ${directory} export file name: ${document.fileName}`,
      )
    }

    seen.add(document.fileName)
  }
}

const main = async () => {
  if (clean) await resetOutputDirectories(["blog", "pages"])

  const postsContext = await fetchEntries({
    contentType: postContentType,
    order: "-fields.publishedOn",
  })
  const pagesContext = await fetchEntries({ contentType: pageContentType })

  const postFiles = await writeDocuments(
    "blog",
    postsContext.items.map(entry => postFromEntry(entry, postsContext)),
  )
  const pageFiles = await writeDocuments(
    "pages",
    pagesContext.items.map(pageFromEntry),
  )

  console.log(
    `Exported ${postFiles.length} blog posts and ${pageFiles.length} pages to ${path.relative(
      projectRoot,
      outputRoot,
    )}.`,
  )
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
