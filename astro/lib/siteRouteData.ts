import { resolve } from "node:path"
import { loadBlogPosts, loadPages } from "../../src/lib/content"
import { buildSiteRouteData } from "../../src/lib/routeData"
import { blogIndexPath } from "../../src/lib/routes"
import type { BlogPostsRouteData } from "../../src/lib/routeData"

type BlogAuthorRouteData = BlogPostsRouteData & {
  authorId: string
}

type BlogTagRouteData = BlogPostsRouteData & {
  tag: string
}

const contentDirectory = resolve(process.cwd(), "src", "content")

export const loadSiteRouteData = () =>
  buildSiteRouteData({
    posts: loadBlogPosts(contentDirectory),
    pages: loadPages(contentDirectory),
  })

export const loadBlogIndexRoute = () => {
  const route = loadSiteRouteData().blogPostIndexes.find(
    route => route.path === blogIndexPath,
  )
  if (!route) throw new Error("Blog index route was not generated.")
  return route
}

export const loadBlogTagRoutes = (): Array<BlogTagRouteData> =>
  loadSiteRouteData().blogPostIndexes.filter(
    (route): route is BlogTagRouteData => typeof route.tag === "string",
  )

export const loadBlogAuthorRoutes = (): Array<BlogAuthorRouteData> =>
  loadSiteRouteData().blogPostIndexes.filter(
    (route): route is BlogAuthorRouteData => typeof route.authorId === "string",
  )
