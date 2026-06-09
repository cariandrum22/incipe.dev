import { siteMetadata } from "../../src/config/siteMetadata"
import { rootPath } from "../../src/lib/routes"
import { loadSiteRouteData } from "./siteRouteData"

export const robotsPath = "/robots.txt"
export const sitemapIndexPath = "/sitemap-index.xml"
export const sitemapPath = "/sitemap-0.xml"

export const renderRobotsTxt = () =>
  [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${absoluteUrl(sitemapIndexPath)}`,
    `Host: ${siteMetadata.siteUrl}`,
    "",
  ].join("\n")

export const renderSitemapIndexXml = () =>
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    "<sitemap>",
    `<loc>${escapeXml(absoluteUrl(sitemapPath))}</loc>`,
    "</sitemap>",
    "</sitemapindex>",
  ].join("")

export const renderSitemapXml = () => {
  const urls = loadSitemapRoutes().map(route => absoluteUrl(route))

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    [
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
      ' xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"',
      ' xmlns:xhtml="http://www.w3.org/1999/xhtml"',
      ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"',
      ' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">',
    ].join(""),
    ...urls.map(url => `<url><loc>${escapeXml(url)}</loc></url>`),
    "</urlset>",
  ].join("")
}

export const loadSitemapRoutes = () => {
  const routeData = loadSiteRouteData()

  return [
    ...routeData.blogPosts.map(route => route.path),
    ...routeData.blogPostIndexes.map(route => route.path),
    ...routeData.pages.map(route => route.path),
    rootPath,
  ]
}

const absoluteUrl = (pathname: string) =>
  new URL(pathname, `${siteMetadata.siteUrl}/`).href

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
