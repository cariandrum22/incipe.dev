import React from "react"
import Blog from "../../components/organisms/Blog"
import type { BlogPost } from "../../types/content"

type Props = {
  pageContext: {
    title: string
    caption?: string
    posts: Array<BlogPost>
  }
}

const Posts: React.FC<Props> = ({ pageContext }) => (
  <Blog title={pageContext.title} caption={pageContext.caption}>
    {pageContext.posts}
  </Blog>
)

export default Posts
