#!/usr/bin/env node

import { access, readFile, readdir } from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDir, "..")
const contentRoot = path.join(projectRoot, "src", "content")
const defaultOutputDir = process.env["ROUTE_OUTPUT_DIR"] ?? "dist"

const main = async () => {
  const options = parseArguments(process.argv.slice(2))
  const outputRoot = path.resolve(
    projectRoot,
    options.outputDir ?? defaultOutputDir,
  )
  const { routes, errors } = await buildRouteContract()

  errors.push(...validateUniqueRoutes(routes))

  if (options.list) {
    if (errors.length > 0) {
      printErrors(errors)
      return
    }

    console.log(routes.join("\n"))
    return
  }

  errors.push(...(await validateRoutesExist(outputRoot, routes)))

  if (errors.length > 0) {
    printErrors(errors)
    return
  }

  console.log(`Route contract is valid (${routes.length} routes).`)
}

const printErrors = errors => {
  console.error(errors.map(error => `- ${error}`).join("\n"))
  process.exitCode = 1
}

const parseArguments = args => {
  const options = {
    list: false,
    outputDir: undefined,
  }

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index]

    if (argument === "--list") {
      options.list = true
      continue
    }

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

const buildRouteContract = async () => {
  const [posts, pages] = await Promise.all([
    readMdxCollection("blog"),
    readMdxCollection("pages"),
  ])
  const errors = [
    ...formatParseErrors("blog", posts),
    ...formatParseErrors("pages", pages),
  ]

  const postRoutes = posts.flatMap(post => {
    const slug = post.frontmatter["slug"]
    if (typeof slug === "string" && slug.trim().length > 0) {
      return [`/blog/post/${slug}/`]
    }

    errors.push(`blog/${post.fileName}: slug must be a non-empty string`)
    return []
  })

  const tagRoutes = uniqueStrings(
    posts.flatMap(post => {
      const tags = post.frontmatter["tags"]
      return Array.isArray(tags)
        ? tags.filter(tag => typeof tag === "string")
        : []
    }),
  ).map(tag => `/blog/tag/${tag}/`)

  const authorRoutes = uniqueStrings(
    posts.flatMap(post => {
      const authors = post.frontmatter["authors"]
      return Array.isArray(authors)
        ? authors
            .map(author => author?.["identity"])
            .filter(identity => typeof identity === "string")
        : []
    }),
  ).map(identity => `/blog/author/${identity}/`)

  const pageRoutes = pages.flatMap(page => {
    const slug = page.frontmatter["slug"]
    if (typeof slug === "string" && slug.trim().length > 0) {
      return [`/${slug}/`]
    }

    errors.push(`pages/${page.fileName}: slug must be a non-empty string`)
    return []
  })

  return {
    errors,
    routes: [
      "/",
      "/blog/",
      "/404/",
      "/404.html",
      ...postRoutes,
      ...tagRoutes,
      ...authorRoutes,
      ...pageRoutes,
    ].sort(),
  }
}

const formatParseErrors = (collection, documents) =>
  documents.flatMap(document =>
    document.parseErrors.map(
      error => `${collection}/${document.fileName}: ${error}`,
    ),
  )

const readMdxCollection = async collection => {
  const collectionRoot = path.join(contentRoot, collection)
  const fileNames = await readdir(collectionRoot)

  return Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith(".mdx"))
      .sort()
      .map(async fileName => {
        const source = await readFile(
          path.join(collectionRoot, fileName),
          "utf8",
        )
        return {
          ...parseMdxDocument(source),
          fileName,
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
      frontmatter: {},
      parseErrors: ["MDX file is missing frontmatter."],
    }
  }

  return parseFrontmatter(match.groups["frontmatter"] ?? "")
}

const parseFrontmatter = source => {
  const frontmatter = {}
  const parseErrors = []

  for (const line of source.split("\n")) {
    if (line.trim().length === 0) continue

    const separatorIndex = line.indexOf(":")
    if (separatorIndex === -1) {
      parseErrors.push(`Invalid frontmatter line: ${line}`)
      continue
    }

    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim()

    try {
      frontmatter[key] = JSON.parse(value)
    } catch (error) {
      parseErrors.push(`Invalid JSON value for ${key}: ${error.message}`)
    }
  }

  return {
    frontmatter,
    parseErrors,
  }
}

const uniqueStrings = values =>
  Array.from(new Set(values.filter(value => value.trim().length > 0))).sort()

const validateUniqueRoutes = routes => {
  const routeCounts = new Map()

  for (const route of routes) {
    routeCounts.set(route, (routeCounts.get(route) ?? 0) + 1)
  }

  return Array.from(routeCounts)
    .filter(([, count]) => count > 1)
    .map(([route]) => `Route is generated more than once: ${route}`)
}

const validateRoutesExist = async (outputRoot, routes) => {
  const checks = await Promise.all(
    routes.map(async route => ({
      route,
      filePath: routeToHtmlPath(outputRoot, route),
    })),
  )

  const results = await Promise.all(
    checks.map(async check => ({
      ...check,
      exists: await fileExists(check.filePath),
    })),
  )

  return results
    .filter(result => !result.exists)
    .map(
      result =>
        `Missing route output for ${result.route}: ${path.relative(
          projectRoot,
          result.filePath,
        )}`,
    )
}

const routeToHtmlPath = (outputRoot, route) => {
  if (route === "/") return path.join(outputRoot, "index.html")
  if (route.endsWith(".html")) return path.join(outputRoot, route)
  if (!route.startsWith("/") || !route.endsWith("/")) {
    throw new Error(`Route must be absolute and end with a slash: ${route}`)
  }

  const segments = route.split("/").filter(Boolean)
  if (segments.some(segment => segment === "." || segment === "..")) {
    throw new Error(`Route must not contain relative segments: ${route}`)
  }

  return path.join(outputRoot, ...segments, "index.html")
}

const fileExists = async filePath => {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
