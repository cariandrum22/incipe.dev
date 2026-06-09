import React from "react"
import BlogPostsView from "../../views/BlogPostsView"
import type { BlogPost } from "../../types/content"

type Props = {
  pageContext: {
    title: string
    caption?: string
    posts: Array<BlogPost>
  }
}

const Posts: React.FC<Props> = ({ pageContext }) => (
  <BlogPostsView
    title={pageContext.title}
    caption={pageContext.caption}
    posts={pageContext.posts}
  />
)

export default Posts
