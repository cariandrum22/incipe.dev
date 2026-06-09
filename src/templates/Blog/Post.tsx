import React from "react"
import { Link } from "gatsby"
import { getImageSrc } from "../../components/atoms/Image"
import useReadingTime from "../../hooks/useReadingTime"
import SEO from "../../components/SEO"
import Tags from "../../components/atoms/Tags"
import Hero from "../../components/molecules/Hero"
import StyledMDXComponent from "../../components/StyledMDXComponent"
import DummyText from "../../constants/Dummy/Text"
import Date from "../../components/atoms/Date"
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

  const title = post.title ?? "No title."
  const description = post.description ?? "No description given."
  const authors = ((): string => {
    const names = post.authors?.map(author => author?.name)
    if (names) return names.join(", ")
    return "John Due"
  })()
  const { minutes } = useReadingTime(post.body)
  let imageSrc
  if (post.heroImage) {
    imageSrc = getImageSrc(post.heroImage)
  }
  const body = post.body ?? DummyText
  const tags = post.tags ?? ["No tags."]

  return (
    <div className="relative mx-auto max-w-7xl bg-white px-4 py-16 sm:px-6 md:justify-between lg:px-8 lg:pb-28 lg:pt-8">
      <SEO title={title} description={description} image={imageSrc} />
      {post.heroImage && (
        <Hero image={post.heroImage} title={title} content={description} />
      )}
      <div className="flex items-center justify-between">
        <Tags tags={tags} />
        <div className="text-base font-thin text-slate-700">
          {authors} &middot;&nbsp;
          {post.publishedOn && <Date>{post.publishedOn}</Date>}– {minutes}{" "}
          minute read
        </div>
      </div>
      <div className="prose max-w-full">
        <div>{StyledMDXComponent(body)}</div>
        {(previous || next) && (
          <nav>
            <ul className="flow-root list-none px-0 py-6 text-base font-thin text-slate-700">
              {previous && (
                <li className="p-0">
                  <Link
                    className="float-left"
                    to={`/blog/post/${previous.slug}`}
                    rel="prev"
                  >
                    ← {previous.title}
                  </Link>
                </li>
              )}
              {next && (
                <li className="p-0">
                  <Link
                    className="float-right"
                    to={`/blog/post/${next.slug}`}
                    rel="next"
                  >
                    {next.title} →
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </div>
  )
}

export default Post
