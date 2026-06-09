import type { BlogPost, ContentAuthor, PageContent } from "../types/content"

export const rootPath = "/"

export const blogIndexPath = "/blog/"

export const blogPostPath = (post: Pick<BlogPost, "slug">) =>
  blogPostPathBySlug(post.slug)

export const blogPostPathBySlug = (slug: string | null | undefined) =>
  `/blog/post/${requireRouteSegment("blog post slug", slug)}/`

export const blogTagPath = (tag: string) =>
  `/blog/tag/${requireRouteSegment("blog tag", tag)}/`

export const blogAuthorPath = (author: Pick<ContentAuthor, "identity">) =>
  blogAuthorPathByIdentity(author.identity)

export const blogAuthorPathByIdentity = (identity: string | null | undefined) =>
  `/blog/author/${requireRouteSegment("author identity", identity)}/`

export const pagePath = (page: Pick<PageContent, "slug">) =>
  pagePathBySlug(page.slug)

export const pagePathBySlug = (slug: string | null | undefined) =>
  `/${requireRouteSegment("page slug", slug)}/`

export const requireRouteSegment = (
  name: string,
  value: string | null | undefined,
) => {
  if (typeof value === "string" && value.trim().length > 0) return value
  throw new Error(`${name} must be a non-empty string.`)
}
