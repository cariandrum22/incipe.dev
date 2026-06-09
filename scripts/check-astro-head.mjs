#!/usr/bin/env node

import { execFileSync } from "node:child_process"
import { readFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDir, "..")
const defaultOutputDir = process.env["ASTRO_HEAD_OUTPUT_DIR"] ?? "output/astro"
const defaultTitle = "incipe.dev"
const defaultDescription = "This is my personal portfolio and blog site."
const blogCaption =
  "Grammatica loquitur, Dialectia vera docet, Rhetorica verba ministrat, Musica canit, Arithmetica munerat, Geometrica ponderat, Astronomica colit astra."

const representativeRoutes = new Map([
  [
    "/",
    {
      description: defaultDescription,
      refresh: "0;url=/blog/",
      socialTitle: defaultTitle,
      title: defaultTitle,
    },
  ],
  [
    "/blog/",
    {
      description: blogCaption,
      socialTitle: "Blog",
      title: `Blog | ${defaultTitle}`,
    },
  ],
  [
    "/404/",
    {
      description: defaultDescription,
      socialTitle: "Not Found",
      title: `Not Found | ${defaultTitle}`,
    },
  ],
  [
    "/404.html",
    {
      description: defaultDescription,
      socialTitle: "Not Found",
      title: `Not Found | ${defaultTitle}`,
    },
  ],
])

const main = async () => {
  const options = parseArguments(process.argv.slice(2))
  const outputRoot = path.resolve(
    projectRoot,
    options.outputDir ?? defaultOutputDir,
  )
  const routes = listRoutes()
  const routeResults = await Promise.all(
    routes.map(async route => validateRoute(outputRoot, route)),
  )
  const errors = routeResults.flatMap(result => result.errors)

  if (errors.length > 0) {
    printErrors(errors)
    return
  }

  console.log(`Astro head metadata is valid (${routes.length} routes).`)
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

const listRoutes = () =>
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

const validateRoute = async (outputRoot, route) => {
  const filePath = routeToHtmlPath(outputRoot, route)

  try {
    const source = await readFile(filePath, "utf8")
    const document = parseHtmlDocument(source)

    return {
      errors: [
        ...document.errors.map(error => `${route}: ${error}`),
        ...validateCommonHead(route, document),
        ...validateRepresentativeHead(route, document),
      ],
      route,
    }
  } catch (error) {
    return {
      errors: [
        `${route}: Failed to read ${path.relative(
          projectRoot,
          filePath,
        )} (${error.message})`,
      ],
      route,
    }
  }
}

const validateCommonHead = (route, document) => {
  const errors = []

  if (document.lang !== "en") {
    errors.push(
      `${route}: <html> lang must be en; found ${formatValue(document.lang)}`,
    )
  }

  if (!document.title) {
    errors.push(`${route}: <title> must not be empty`)
  }

  requireMeta(errors, route, document, {
    label: 'meta[charset="UTF-8"]',
    match: meta => meta["charset"]?.toLowerCase() === "utf-8",
  })
  requireMeta(errors, route, document, {
    content: "width=device-width",
    label: 'meta[name="viewport"]',
    match: meta => meta["name"] === "viewport",
  })
  requireMeta(errors, route, document, {
    label: 'meta[name="description"]',
    match: meta => meta["name"] === "description",
    nonEmpty: true,
  })
  requireMeta(errors, route, document, {
    label: 'meta[property="og:title"]',
    match: meta => meta["property"] === "og:title",
    nonEmpty: true,
  })
  requireMeta(errors, route, document, {
    label: 'meta[property="og:description"]',
    match: meta => meta["property"] === "og:description",
    nonEmpty: true,
  })
  requireMeta(errors, route, document, {
    content: "website",
    label: 'meta[property="og:type"]',
    match: meta => meta["property"] === "og:type",
  })
  requireMeta(errors, route, document, {
    content: "summary_large_image",
    label: 'meta[name="twitter:card"]',
    match: meta => meta["name"] === "twitter:card",
  })
  requireMeta(errors, route, document, {
    content: "cariandrum22",
    label: 'meta[name="twitter:creator"]',
    match: meta => meta["name"] === "twitter:creator",
  })
  requireMeta(errors, route, document, {
    label: 'meta[name="twitter:title"]',
    match: meta => meta["name"] === "twitter:title",
    nonEmpty: true,
  })
  requireMeta(errors, route, document, {
    label: 'meta[name="twitter:description"]',
    match: meta => meta["name"] === "twitter:description",
    nonEmpty: true,
  })

  return errors
}

const validateRepresentativeHead = (route, document) => {
  const expectation = representativeRoutes.get(route)
  if (!expectation) return []

  const errors = []

  if (document.title !== expectation.title) {
    errors.push(
      `${route}: <title> must be ${formatValue(expectation.title)}; found ${formatValue(
        document.title,
      )}`,
    )
  }

  if (expectation.refresh) {
    requireMeta(errors, route, document, {
      content: expectation.refresh,
      label: 'meta[http-equiv="refresh"]',
      match: meta => meta["http-equiv"] === "refresh",
    })
  }

  requireMeta(errors, route, document, {
    content: expectation.description,
    label: 'meta[name="description"]',
    match: meta => meta["name"] === "description",
  })
  requireMeta(errors, route, document, {
    content: expectation.description,
    label: 'meta[property="og:description"]',
    match: meta => meta["property"] === "og:description",
  })
  requireMeta(errors, route, document, {
    content: expectation.description,
    label: 'meta[name="twitter:description"]',
    match: meta => meta["name"] === "twitter:description",
  })
  requireMeta(errors, route, document, {
    content: expectation.socialTitle,
    label: 'meta[property="og:title"]',
    match: meta => meta["property"] === "og:title",
  })
  requireMeta(errors, route, document, {
    content: expectation.socialTitle,
    label: 'meta[name="twitter:title"]',
    match: meta => meta["name"] === "twitter:title",
  })

  return errors
}

const requireMeta = (errors, route, document, requirement) => {
  const matches = document.meta.filter(requirement.match)

  if (matches.length !== 1) {
    errors.push(
      `${route}: Expected exactly one ${requirement.label}; found ${matches.length}`,
    )
    return undefined
  }

  const match = matches[0]
  const content = match["content"] ?? ""

  if (requirement.nonEmpty && content.trim().length === 0) {
    errors.push(`${route}: ${requirement.label} content must not be empty`)
  }

  if (
    typeof requirement.content === "string" &&
    content !== requirement.content
  ) {
    errors.push(
      `${route}: ${requirement.label} content must be ${formatValue(
        requirement.content,
      )}; found ${formatValue(content)}`,
    )
  }

  return match
}

const parseHtmlDocument = source => {
  const errors = []
  const htmlMatch = /<html\b(?<attrs>[^>]*)>/iu.exec(source)
  const headMatch = /<head\b[^>]*>(?<head>[\s\S]*?)<\/head>/iu.exec(source)

  if (!htmlMatch?.groups) {
    errors.push("Missing <html> element")
  }

  if (!headMatch?.groups) {
    errors.push("Missing <head> element")
  }

  const head = headMatch?.groups?.["head"] ?? ""
  const titleMatch = /<title>(?<title>[\s\S]*?)<\/title>/iu.exec(head)

  if (!titleMatch?.groups) {
    errors.push("Missing <title> element")
  }

  return {
    errors,
    lang: parseAttributes(htmlMatch?.groups?.["attrs"] ?? "")["lang"],
    meta: Array.from(head.matchAll(/<meta\b(?<attrs>[^>]*)>/giu)).map(match =>
      parseAttributes(match.groups?.["attrs"] ?? ""),
    ),
    title: decodeHtml(titleMatch?.groups?.["title"] ?? "").trim(),
  }
}

const parseAttributes = source => {
  const attributes = {}
  const attributePattern =
    /([:@\w.-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/gu

  for (const match of source.matchAll(attributePattern)) {
    const [, rawName, doubleQuoted, singleQuoted, unquoted] = match
    const value = doubleQuoted ?? singleQuoted ?? unquoted ?? ""
    attributes[rawName.toLowerCase()] = decodeHtml(value)
  }

  return attributes
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

const decodeHtml = value =>
  value
    .replaceAll("&apos;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&gt;", ">")
    .replaceAll("&lt;", "<")
    .replaceAll("&amp;", "&")

const formatValue = value => JSON.stringify(value ?? "")

const printErrors = errors => {
  console.error(errors.map(error => `- ${error}`).join("\n"))
  process.exitCode = 1
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
