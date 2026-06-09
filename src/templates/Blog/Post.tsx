import React from "react"
import SEO from "../../components/SEO"
import BlogPostView, {
  getBlogPostDescription,
  getBlogPostImageSrc,
  getBlogPostTitle,
} from "../../views/BlogPostView"
import type { BlogPost, BlogPostPreview } from "../../types/content"

type Props = {
  pageContext: {
    post: BlogPost
    previous: BlogPostPreview | null
    next: BlogPostPreview | null
  }
}

const Post: React.FC<Props> = props => {
  const { post, previous, next } = props.pageContext

  const title = getBlogPostTitle(post)
  const description = getBlogPostDescription(post)
  const imageSrc = getBlogPostImageSrc(post)

  return (
    <>
      <SEO title={title} description={description} image={imageSrc} />
      <BlogPostView post={post} previous={previous} next={next} />
    </>
  )
}

export default Post
