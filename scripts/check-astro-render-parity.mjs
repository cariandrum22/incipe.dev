#!/usr/bin/env node

import { execFileSync } from "node:child_process"
import { readFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDir, "..")
const defaultGatsbyOutputDir = process.env["GATSBY_OUTPUT_DIR"] ?? "public"
const defaultAstroOutputDir = process.env["ASTRO_OUTPUT_DIR"] ?? "output/astro"

const main = async () => {
  const options = parseArguments(process.argv.slice(2))
  const gatsbyOutputRoot = path.resolve(
    projectRoot,
    options.gatsbyOutputDir ?? defaultGatsbyOutputDir,
  )
  const astroOutputRoot = path.resolve(
    projectRoot,
    options.astroOutputDir ?? defaultAstroOutputDir,
  )
  const routes = listRouteContract()

  const results = await Promise.all(
    routes.map(route =>
      compareRoute({ astroOutputRoot, gatsbyOutputRoot, route }),
    ),
  )
  const errors = results.flatMap(result => result.errors)

  if (errors.length > 0) {
    printErrors(errors)
    return
  }

  console.log(`Astro render parity is valid (${routes.length} routes).`)
}

const parseArguments = args => {
  const options = {
    astroOutputDir: undefined,
    gatsbyOutputDir: undefined,
  }

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index]

    if (argument === "--gatsby-output-dir") {
      options.gatsbyOutputDir = args[index + 1]
      if (
        !options.gatsbyOutputDir ||
        options.gatsbyOutputDir.startsWith("--")
      ) {
        throw new Error("--gatsby-output-dir requires a value")
      }
      index += 1
      continue
    }

    if (argument?.startsWith("--gatsby-output-dir=")) {
      options.gatsbyOutputDir = argument.slice("--gatsby-output-dir=".length)
      if (!options.gatsbyOutputDir) {
        throw new Error("--gatsby-output-dir requires a value")
      }
      continue
    }

    if (argument === "--astro-output-dir") {
      options.astroOutputDir = args[index + 1]
      if (!options.astroOutputDir || options.astroOutputDir.startsWith("--")) {
        throw new Error("--astro-output-dir requires a value")
      }
      index += 1
      continue
    }

    if (argument?.startsWith("--astro-output-dir=")) {
      options.astroOutputDir = argument.slice("--astro-output-dir=".length)
      if (!options.astroOutputDir) {
        throw new Error("--astro-output-dir requires a value")
      }
      continue
    }

    throw new Error(`Unknown argument: ${argument}`)
  }

  return options
}

const listRouteContract = () =>
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

const compareRoute = async ({ astroOutputRoot, gatsbyOutputRoot, route }) => {
  const errors = []
  const gatsbyPath = routeToHtmlPath(gatsbyOutputRoot, route)
  const astroPath = routeToHtmlPath(astroOutputRoot, route)
  const [gatsbyHtml, astroHtml] = await Promise.all([
    readHtmlFile(gatsbyPath),
    readHtmlFile(astroPath),
  ])

  if (gatsbyHtml.error) {
    errors.push(
      `${route}: cannot read Gatsby HTML at ${relativePath(gatsbyPath)}: ${gatsbyHtml.error.message}`,
    )
  }

  if (astroHtml.error) {
    errors.push(
      `${route}: cannot read Astro HTML at ${relativePath(astroPath)}: ${astroHtml.error.message}`,
    )
  }

  if (errors.length > 0 || !gatsbyHtml.content || !astroHtml.content) {
    return { errors }
  }

  const gatsbyText = normalizeHtmlText(gatsbyHtml.content)
  const astroText = normalizeHtmlText(astroHtml.content)

  if (gatsbyText !== astroText) {
    errors.push(formatTextMismatch(route, gatsbyText, astroText))
  }

  const gatsbyLinks = extractComparableLinks(gatsbyHtml.content)
  const astroLinks = extractComparableLinks(astroHtml.content)

  if (!areStringArraysEqual(gatsbyLinks, astroLinks)) {
    errors.push(formatLinksMismatch(route, gatsbyLinks, astroLinks))
  }

  return { errors }
}

const readHtmlFile = async filePath => {
  try {
    return {
      content: await readFile(filePath, "utf8"),
      error: undefined,
    }
  } catch (error) {
    return {
      content: undefined,
      error,
    }
  }
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

const normalizeHtmlText = html => {
  const body = /<body[^>]*>(?<body>[\s\S]*?)<\/body>/iu.exec(html)?.groups?.[
    "body"
  ]

  return decodeEntities(
    (body ?? html)
      .replaceAll("\0", "")
      .replace(/<script[\s\S]*?<\/script>/giu, " ")
      .replace(/<style[\s\S]*?<\/style>/giu, " ")
      .replace(/<svg[\s\S]*?<\/svg>/giu, " ")
      .replace(/<!--[\s\S]*?-->/gu, " ")
      .replace(/<[^>]+>/gu, " "),
  )
    .replace(/\s+/gu, " ")
    .trim()
}

const extractComparableLinks = html =>
  Array.from(html.matchAll(/<a\s+[^>]*href=["'](?<href>[^"']+)["'][^>]*>/giu))
    .map(match => decodeEntities(match.groups?.["href"] ?? ""))
    .filter(isComparableHref)
    .sort()

const isComparableHref = href =>
  href.length > 0 &&
  !href.startsWith("/_astro/") &&
  !href.startsWith("/_gatsby/") &&
  !href.startsWith("/page-data/")

const decodeEntities = value =>
  value
    .replace(/&#x(?<codePoint>[\da-f]+);/giu, (_, codePoint) =>
      decodeCodePoint(Number.parseInt(codePoint, 16)),
    )
    .replace(/&#(?<codePoint>\d+);/gu, (_, codePoint) =>
      decodeCodePoint(Number.parseInt(codePoint, 10)),
    )
    .replace(/&(amp|gt|lt|middot|nbsp|quot);/giu, entity => {
      const normalized = entity.toLowerCase()

      if (normalized === "&amp;") return "&"
      if (normalized === "&gt;") return ">"
      if (normalized === "&lt;") return "<"
      if (normalized === "&middot;") return "\u00b7"
      if (normalized === "&nbsp;") return " "
      if (normalized === "&quot;") return '"'

      return entity
    })

const decodeCodePoint = codePoint => {
  try {
    return String.fromCodePoint(codePoint)
  } catch {
    return ""
  }
}

const formatTextMismatch = (route, gatsbyText, astroText) => {
  const diffIndex = findFirstDifferenceIndex(gatsbyText, astroText)
  const start = Math.max(0, diffIndex - 80)
  const end = diffIndex + 160

  return [
    `${route}: rendered body text differs`,
    `  Gatsby length: ${gatsbyText.length}`,
    `  Astro length: ${astroText.length}`,
    `  First difference: ${diffIndex}`,
    `  Gatsby: ${JSON.stringify(gatsbyText.slice(start, end))}`,
    `  Astro: ${JSON.stringify(astroText.slice(start, end))}`,
  ].join("\n")
}

const findFirstDifferenceIndex = (left, right) => {
  const maxLength = Math.max(left.length, right.length)

  for (let index = 0; index < maxLength; index += 1) {
    if (left[index] !== right[index]) return index
  }

  return -1
}

const areStringArraysEqual = (left, right) =>
  left.length === right.length &&
  left.every((value, index) => value === right[index])

const formatLinksMismatch = (route, gatsbyLinks, astroLinks) => {
  const onlyInGatsby = difference(gatsbyLinks, astroLinks)
  const onlyInAstro = difference(astroLinks, gatsbyLinks)

  return [
    `${route}: rendered links differ`,
    `  Gatsby link count: ${gatsbyLinks.length}`,
    `  Astro link count: ${astroLinks.length}`,
    `  Only in Gatsby: ${JSON.stringify(onlyInGatsby.slice(0, 10))}`,
    `  Only in Astro: ${JSON.stringify(onlyInAstro.slice(0, 10))}`,
  ].join("\n")
}

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

const relativePath = filePath => path.relative(projectRoot, filePath)

const printErrors = errors => {
  console.error(errors.map(error => `- ${error}`).join("\n"))
  process.exitCode = 1
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
