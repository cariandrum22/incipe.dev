import { blogCaption, uniqueAuthors, uniqueTags } from "./content"
import {
  blogAuthorPathByIdentity,
  blogIndexPath,
  blogPostPath,
  blogTagPath,
  pagePath,
  requireRouteSegment,
} from "./routes"
import type { BlogPost, BlogPostPreview, PageContent } from "../types/content"

export type BlogPostRouteData = {
  next: BlogPostPreview | null
  path: string
  post: BlogPost
  previous: BlogPostPreview | null
}

export type BlogPostsRouteData = {
  authorId?: string
  caption?: string
  path: string
  posts: Array<BlogPost>
  tag?: string
  title: string
}

export type PageRouteData = {
  page: PageContent
  path: string
}

export type SiteRouteData = {
  blogPosts: Array<BlogPostRouteData>
  blogPostIndexes: Array<BlogPostsRouteData>
  pages: Array<PageRouteData>
}

export const buildSiteRouteData = ({
  posts,
  pages,
}: {
  pages: Array<PageContent>
  posts: Array<BlogPost>
}): SiteRouteData => ({
  blogPosts: buildBlogPostRouteData(posts),
  blogPostIndexes: [
    buildBlogIndexRouteData(posts),
    ...buildBlogTagRouteData(posts),
    ...buildBlogAuthorRouteData(posts),
  ],
  pages: buildPageRouteData(pages),
})

const buildBlogPostRouteData = (
  posts: Array<BlogPost>,
): Array<BlogPostRouteData> =>
  posts.map((post, index) => ({
    path: blogPostPath(post),
    post,
    previous: posts[index + 1] ?? null,
    next: posts[index - 1] ?? null,
  }))

const buildBlogIndexRouteData = (
  posts: Array<BlogPost>,
): BlogPostsRouteData => ({
  path: blogIndexPath,
  title: "Blog",
  caption: blogCaption,
  posts,
})

const buildBlogTagRouteData = (
  posts: Array<BlogPost>,
): Array<BlogPostsRouteData> =>
  uniqueTags(posts).map(tag => ({
    path: blogTagPath(tag),
    title: `Tag: ${tag}`,
    tag,
    posts: posts.filter(post => post.tags?.includes(tag)),
  }))

const buildBlogAuthorRouteData = (
  posts: Array<BlogPost>,
): Array<BlogPostsRouteData> =>
  uniqueAuthors(posts).map(author => {
    const authorId = requireRouteSegment("author identity", author.identity)

    return {
      path: blogAuthorPathByIdentity(authorId),
      title: `Author: ${author.name}`,
      caption: author.profile ?? undefined,
      authorId,
      posts: posts.filter(post =>
        post.authors?.some(postAuthor => postAuthor.identity === authorId),
      ),
    }
  })

const buildPageRouteData = (pages: Array<PageContent>): Array<PageRouteData> =>
  pages.map(page => ({
    path: pagePath(page),
    page,
  }))
