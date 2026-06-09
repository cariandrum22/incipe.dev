#!/usr/bin/env node

import { execFileSync } from "node:child_process"
import path from "node:path"
import process from "node:process"
import { setTimeout as delay } from "node:timers/promises"
import { fileURLToPath } from "node:url"

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const defaultSiteUrl = process.env["SITE_URL"] ?? "https://incipe.dev"
const defaultRetries = Number.parseInt(
  process.env["DEPLOYED_SITE_CHECK_RETRIES"] ?? "12",
  10,
)
const defaultRetryDelayMs = Number.parseInt(
  process.env["DEPLOYED_SITE_CHECK_RETRY_DELAY_MS"] ?? "5000",
  10,
)
const sitemapIndexPath = "/sitemap-index.xml"
const sitemapPath = "/sitemap-0.xml"

const main = async () => {
  const options = parseArguments(process.argv.slice(2))
  const siteUrl = normalizeSiteUrl(options.siteUrl ?? defaultSiteUrl)
  const retries = options.retries ?? defaultRetries
  const retryDelayMs = options.retryDelayMs ?? defaultRetryDelayMs

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    const errors = await validateDeployment(siteUrl)

    if (errors.length === 0) {
      console.log(`Deployed site is valid: ${siteUrl}`)
      return
    }

    if (attempt === retries) {
      printErrors(errors)
      return
    }

    console.error(
      `Deployed site check failed on attempt ${attempt}/${retries}; retrying in ${retryDelayMs}ms.`,
    )
    await delay(retryDelayMs)
  }
}

const parseArguments = args => {
  const options = {
    retries: undefined,
    retryDelayMs: undefined,
    siteUrl: undefined,
  }

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index]

    if (argument === "--site-url") {
      options.siteUrl = args[index + 1]
      if (!options.siteUrl || options.siteUrl.startsWith("--")) {
        throw new Error("--site-url requires a value")
      }
      index += 1
      continue
    }

    if (argument?.startsWith("--site-url=")) {
      options.siteUrl = argument.slice("--site-url=".length)
      if (!options.siteUrl) {
        throw new Error("--site-url requires a value")
      }
      continue
    }

    if (argument === "--retries") {
      options.retries = parsePositiveInteger("--retries", args[index + 1])
      index += 1
      continue
    }

    if (argument?.startsWith("--retries=")) {
      options.retries = parsePositiveInteger(
        "--retries",
        argument.slice("--retries=".length),
      )
      continue
    }

    if (argument === "--retry-delay-ms") {
      options.retryDelayMs = parsePositiveInteger(
        "--retry-delay-ms",
        args[index + 1],
      )
      index += 1
      continue
    }

    if (argument?.startsWith("--retry-delay-ms=")) {
      options.retryDelayMs = parsePositiveInteger(
        "--retry-delay-ms",
        argument.slice("--retry-delay-ms=".length),
      )
      continue
    }

    throw new Error(`Unknown argument: ${argument}`)
  }

  return options
}

const parsePositiveInteger = (name, value) => {
  const parsed = Number.parseInt(value ?? "", 10)

  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(`${name} requires a positive integer`)
  }

  return parsed
}

const validateDeployment = async siteUrl => {
  const checks = await Promise.all([
    validateHtmlPage(siteUrl, "/"),
    validateHtmlPage(siteUrl, "/blog/"),
    validateHtmlPage(siteUrl, "/about/"),
    validateRobotsTxt(siteUrl),
    validateSitemapIndex(siteUrl),
    validateSitemap(siteUrl),
  ])

  return checks.flat()
}

const validateHtmlPage = async (siteUrl, pathname) => {
  const result = await fetchText(siteUrl, pathname)
  const errors = [...result.errors]

  if (!result.ok) return errors

  if (!contentTypeIncludes(result.contentType, "text/html")) {
    errors.push(
      `${pathname}: expected text/html content type; received ${result.contentType}`,
    )
  }

  if (!result.body.toLowerCase().includes("<!doctype html>")) {
    errors.push(`${pathname}: response does not look like an HTML document`)
  }

  return errors
}

const validateRobotsTxt = async siteUrl => {
  const result = await fetchText(siteUrl, "/robots.txt")
  const errors = [...result.errors]

  if (!result.ok) return errors

  if (!contentTypeIncludes(result.contentType, "text/plain")) {
    errors.push(
      `/robots.txt: expected text/plain content type; received ${result.contentType}`,
    )
  }

  const expectedLines = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${absoluteUrl(siteUrl, sitemapIndexPath)}`,
    `Host: ${siteUrl}`,
  ]

  errors.push(
    ...expectedLines
      .filter(line => !result.body.split("\n").includes(line))
      .map(line => `/robots.txt: missing line ${line}`),
  )

  return errors
}

const validateSitemapIndex = async siteUrl => {
  const result = await fetchText(siteUrl, sitemapIndexPath)
  const errors = [...result.errors]

  if (!result.ok) return errors

  if (!contentTypeIncludes(result.contentType, "application/xml")) {
    errors.push(
      `${sitemapIndexPath}: expected application/xml content type; received ${result.contentType}`,
    )
  }

  const locs = extractLocs(result.body)
  const expectedLoc = absoluteUrl(siteUrl, sitemapPath)

  if (locs.length !== 1 || locs[0] !== expectedLoc) {
    errors.push(
      `${sitemapIndexPath}: expected only ${expectedLoc}; found ${JSON.stringify(
        locs,
      )}`,
    )
  }

  return errors
}

const validateSitemap = async siteUrl => {
  const result = await fetchText(siteUrl, sitemapPath)
  const errors = [...result.errors]

  if (!result.ok) return errors

  if (!contentTypeIncludes(result.contentType, "application/xml")) {
    errors.push(
      `${sitemapPath}: expected application/xml content type; received ${result.contentType}`,
    )
  }

  const expectedUrls = listExpectedSitemapUrls(siteUrl)
  const actualUrls = extractLocs(result.body)
  const missingUrls = difference(expectedUrls, actualUrls)
  const extraUrls = difference(actualUrls, expectedUrls)

  if (actualUrls.includes(absoluteUrl(siteUrl, "/404/"))) {
    errors.push(`${sitemapPath}: must not include /404/`)
  }

  if (actualUrls.includes(absoluteUrl(siteUrl, "/404.html"))) {
    errors.push(`${sitemapPath}: must not include /404.html`)
  }

  if (missingUrls.length > 0) {
    errors.push(
      `${sitemapPath}: missing URLs ${JSON.stringify(missingUrls.slice(0, 10))}`,
    )
  }

  if (extraUrls.length > 0) {
    errors.push(
      `${sitemapPath}: unexpected URLs ${JSON.stringify(extraUrls.slice(0, 10))}`,
    )
  }

  return errors
}

const fetchText = async (siteUrl, pathname) => {
  const url = absoluteUrl(siteUrl, pathname)

  try {
    const response = await fetch(url, {
      redirect: "follow",
    })
    const body = await response.text()

    return {
      body,
      contentType: response.headers.get("content-type") ?? "",
      errors: response.ok
        ? []
        : [`${pathname}: received HTTP ${response.status}`],
      ok: response.ok,
    }
  } catch (error) {
    return {
      body: "",
      contentType: "",
      errors: [`${pathname}: ${error.message}`],
      ok: false,
    }
  }
}

const listExpectedSitemapUrls = siteUrl =>
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
    .map(route => absoluteUrl(siteUrl, route))
    .sort()

const extractLocs = source =>
  Array.from(source.matchAll(/<loc>(?<loc>[\s\S]*?)<\/loc>/gu))
    .map(match => unescapeXml(match.groups?.["loc"] ?? "").trim())
    .sort()

const normalizeSiteUrl = siteUrl => {
  const url = new URL(siteUrl)
  url.pathname = "/"
  url.search = ""
  url.hash = ""
  return url.href.slice(0, -1)
}

const absoluteUrl = (siteUrl, pathname) => new URL(pathname, `${siteUrl}/`).href

const contentTypeIncludes = (contentType, expected) =>
  contentType.toLowerCase().split(";").includes(expected)

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
