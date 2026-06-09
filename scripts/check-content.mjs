#!/usr/bin/env node

import { access, readFile, readdir } from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDir, "..")
const contentRoot = path.join(projectRoot, "src", "content")
const staticRoot = path.join(projectRoot, "static")
const contentfulAssetPattern = /(?:https:)?\/\/images\.ctfassets\.net\//u
const markdownImagePattern = /!\[[^\]]*\]\((?<url>[^)\s]+)(?:\s+"[^"]*")?\)/gu

const main = async () => {
  const errors = [...(await validateBlogPosts()), ...(await validatePages())]

  if (errors.length > 0) {
    console.error(errors.map(error => `- ${error}`).join("\n"))
    process.exitCode = 1
    return
  }

  console.log("Content files are valid.")
}

const validateBlogPosts = async () => {
  const documents = await readMdxCollection("blog")
  const errors = [
    ...validateUniqueSlugs("blog", documents),
    ...validateUniqueFileNames("blog", documents),
  ]

  for (const document of documents) {
    const { frontmatter } = document

    errors.push(
      ...validateFileNameMatchesSlug("blog", document),
      ...validateRequiredString("blog", document, "title"),
      ...validateRequiredString("blog", document, "slug"),
      ...validateRequiredString("blog", document, "description"),
      ...validatePublishedOn("blog", document),
      ...validateStringArray("blog", document, "tags"),
      ...validateAuthors(document),
      ...validateImage("blog", document, "heroImage", frontmatter["heroImage"]),
      ...validateContentfulMetadata("blog", document),
      ...validateBody("blog", document),
      ...(await validateMarkdownImages("blog", document)),
      ...validateNoContentfulAssetUrls("blog", document),
    )
  }

  return errors
}

const validatePages = async () => {
  const documents = await readMdxCollection("pages")
  const errors = [
    ...validateUniqueSlugs("pages", documents),
    ...validateUniqueFileNames("pages", documents),
  ]

  for (const document of documents) {
    errors.push(
      ...validateFileNameMatchesSlug("pages", document),
      ...validateRequiredString("pages", document, "title"),
      ...validateRequiredString("pages", document, "slug"),
      ...validateContentfulMetadata("pages", document),
      ...validateBody("pages", document),
      ...(await validateMarkdownImages("pages", document)),
      ...validateNoContentfulAssetUrls("pages", document),
    )
  }

  return errors
}

const readMdxCollection = async collection => {
  const collectionRoot = path.join(contentRoot, collection)
  const fileNames = await readdir(collectionRoot)

  return Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith(".mdx"))
      .sort()
      .map(async fileName => {
        const filePath = path.join(collectionRoot, fileName)
        const source = await readFile(filePath, "utf8")
        const document = parseMdxDocument(source)

        return {
          ...document,
          fileName,
          filePath,
        }
      }),
  )
}

const parseMdxDocument = source => {
  const match = /^---\n(?<frontmatter>[\s\S]*?)\n---\n?(?<body>[\s\S]*)$/u.exec(
    source,
  )

  if (!match?.groups) {
    return {
      body: source,
      frontmatter: {},
      frontmatterSource: "",
      parseErrors: ["MDX file is missing frontmatter."],
    }
  }

  const { frontmatter, parseErrors } = parseFrontmatter(
    match.groups["frontmatter"] ?? "",
  )

  return {
    body: match.groups["body"] ?? "",
    frontmatter,
    frontmatterSource: match.groups["frontmatter"] ?? "",
    parseErrors,
  }
}

const parseFrontmatter = source => {
  const frontmatter = {}
  const parseErrors = []
  const seenKeys = new Set()

  for (const line of source.split("\n")) {
    if (line.trim().length === 0) continue

    const separatorIndex = line.indexOf(":")
    if (separatorIndex === -1) {
      parseErrors.push(`Invalid frontmatter line: ${line}`)
      continue
    }

    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim()

    if (seenKeys.has(key)) {
      parseErrors.push(`Duplicate frontmatter key: ${key}`)
    }
    seenKeys.add(key)

    try {
      frontmatter[key] = JSON.parse(value)
    } catch (error) {
      parseErrors.push(`Invalid JSON value for ${key}: ${error.message}`)
    }
  }

  return { frontmatter, parseErrors }
}

const validateUniqueSlugs = (collection, documents) => {
  const slugs = new Map()
  const errors = []

  for (const document of documents) {
    const slug = document.frontmatter["slug"]
    if (typeof slug !== "string") continue

    const existingFileName = slugs.get(slug)
    if (existingFileName) {
      errors.push(
        `${collection}/${document.fileName}: slug duplicates ${existingFileName}: ${slug}`,
      )
    } else {
      slugs.set(slug, document.fileName)
    }
  }

  return errors
}

const validateUniqueFileNames = (collection, documents) => {
  const fileNames = new Set()
  const errors = []

  for (const document of documents) {
    if (fileNames.has(document.fileName)) {
      errors.push(`${collection}/${document.fileName}: duplicate file name`)
    }
    fileNames.add(document.fileName)
  }

  return errors
}

const validateFileNameMatchesSlug = (collection, document) => {
  const slug = document.frontmatter["slug"]
  if (typeof slug !== "string") return []

  const fileSlug = path.basename(document.fileName, ".mdx")
  if (fileSlug === slug) return []

  return [
    `${collection}/${document.fileName}: file name must match slug "${slug}"`,
  ]
}

const validateRequiredString = (collection, document, key) => {
  const value = document.frontmatter[key]
  if (typeof value === "string" && value.trim().length > 0) return []

  return [
    `${collection}/${document.fileName}: ${key} must be a non-empty string`,
  ]
}

const validatePublishedOn = (collection, document) => {
  const value = document.frontmatter["publishedOn"]
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/u.test(value)) {
    return []
  }

  return [
    `${collection}/${document.fileName}: publishedOn must be a YYYY-MM-DD string`,
  ]
}

const validateStringArray = (collection, document, key) => {
  const value = document.frontmatter[key]
  if (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(item => typeof item === "string" && item.trim().length > 0)
  ) {
    return []
  }

  return [
    `${collection}/${document.fileName}: ${key} must be a non-empty string array`,
  ]
}

const validateAuthors = document => {
  const errors = []
  const authors = document.frontmatter["authors"]

  if (!Array.isArray(authors) || authors.length === 0) {
    return [`blog/${document.fileName}: authors must be a non-empty array`]
  }

  authors.forEach((author, index) => {
    errors.push(
      ...validateObjectString(
        "blog",
        document,
        `authors[${index}].identity`,
        author?.["identity"],
      ),
      ...validateObjectString(
        "blog",
        document,
        `authors[${index}].name`,
        author?.["name"],
      ),
      ...validateObjectString(
        "blog",
        document,
        `authors[${index}].profile`,
        author?.["profile"],
      ),
      ...validateImage(
        "blog",
        document,
        `authors[${index}].picture`,
        author?.["picture"],
      ),
    )
  })

  return errors
}

const validateObjectString = (collection, document, key, value) => {
  if (typeof value === "string" && value.trim().length > 0) return []
  return [
    `${collection}/${document.fileName}: ${key} must be a non-empty string`,
  ]
}

const validateImage = (collection, document, key, value) => {
  const errors = []

  if (!isPlainObject(value)) {
    return [`${collection}/${document.fileName}: ${key} must be an object`]
  }

  errors.push(
    ...validateObjectString(collection, document, `${key}.url`, value["url"]),
  )

  if (typeof value["url"] === "string" && !value["url"].startsWith("/")) {
    errors.push(
      `${collection}/${document.fileName}: ${key}.url must be a local absolute path`,
    )
  }

  for (const dimension of ["width", "height"]) {
    const field = value[dimension]
    if (typeof field !== "number" || !Number.isInteger(field) || field <= 0) {
      errors.push(
        `${collection}/${document.fileName}: ${key}.${dimension} must be a positive integer`,
      )
    }
  }

  return errors
}

const validateContentfulMetadata = (collection, document) => {
  const metadata = document.frontmatter["contentful"]
  if (metadata == null) return []

  if (!isPlainObject(metadata)) {
    return [`${collection}/${document.fileName}: contentful must be an object`]
  }

  return [
    ...validateObjectString(
      collection,
      document,
      "contentful.entryId",
      metadata["entryId"],
    ),
    ...validateObjectString(
      collection,
      document,
      "contentful.contentType",
      metadata["contentType"],
    ),
    ...validateObjectString(
      collection,
      document,
      "contentful.updatedAt",
      metadata["updatedAt"],
    ),
  ]
}

const validateBody = (collection, document) => {
  if (document.body.trim().length > 0) return []
  return [`${collection}/${document.fileName}: body must be non-empty`]
}

const validateMarkdownImages = async (collection, document) => {
  const errors = []

  for (const match of document.body.matchAll(markdownImagePattern)) {
    const imagePath = match.groups?.["url"]
    if (!imagePath?.startsWith("/content-assets/")) continue

    if (!(await localAssetExists(imagePath))) {
      errors.push(
        `${collection}/${document.fileName}: missing local asset ${imagePath}`,
      )
    }
  }

  await Promise.all(
    imageValues(document.frontmatter).map(async image => {
      const imagePath = image["url"]
      if (typeof imagePath !== "string" || !imagePath.startsWith("/")) return

      if (!(await localAssetExists(imagePath))) {
        errors.push(
          `${collection}/${document.fileName}: missing local asset ${imagePath}`,
        )
      }
    }),
  )

  return errors
}

const validateNoContentfulAssetUrls = (collection, document) => {
  const errors = [...document.parseErrors]

  if (
    contentfulAssetPattern.test(document.frontmatterSource) ||
    contentfulAssetPattern.test(document.body)
  ) {
    errors.push("contains Contentful CDN URL")
  }

  return errors.map(error => `${collection}/${document.fileName}: ${error}`)
}

const imageValues = value => {
  if (Array.isArray(value)) return value.flatMap(imageValues)
  if (!isPlainObject(value)) return []

  const children = Object.values(value).flatMap(imageValues)
  if (typeof value["url"] === "string") return [value, ...children]
  return children
}

const localAssetExists = async publicPath => {
  const relativePath = publicPath.replace(/^\/+/u, "")

  try {
    await access(path.join(staticRoot, relativePath))
    return true
  } catch {
    return false
  }
}

const isPlainObject = value =>
  typeof value === "object" && value !== null && !Array.isArray(value)

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
