import React from "react"
import Blog from "../components/organisms/Blog"
import type { BlogPost } from "../types/content"

export type BlogPostsViewProps = {
  caption?: string
  posts: Array<BlogPost>
  title: string
}

const BlogPostsView: React.FC<BlogPostsViewProps> = ({
  title,
  caption,
  posts,
}) => (
  <Blog title={title} caption={caption}>
    {posts}
  </Blog>
)

export default BlogPostsView
