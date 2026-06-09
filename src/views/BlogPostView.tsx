import React from "react"
import { getImageSrc } from "../components/atoms/Image"
import useReadingTime from "../hooks/useReadingTime"
import Tags from "../components/atoms/Tags"
import Hero from "../components/molecules/Hero"
import StyledMDXComponent from "../components/StyledMDXComponent"
import DummyText from "../constants/Dummy/Text"
import Date from "../components/atoms/Date"
import type { BlogPost, BlogPostPreview } from "../types/content"

export type BlogPostViewProps = {
  next: BlogPostPreview | null
  post: BlogPost
  previous: BlogPostPreview | null
}

export const getBlogPostTitle = (post: BlogPost) => post.title ?? "No title."

export const getBlogPostDescription = (post: BlogPost) =>
  post.description ?? "No description given."

export const getBlogPostImageSrc = (post: BlogPost) =>
  post.heroImage ? getImageSrc(post.heroImage) : undefined

const getBlogPostAuthors = (post: BlogPost) => {
  const names = post.authors?.map(author => author?.name)
  if (names) return names.join(", ")
  return "John Due"
}

const BlogPostView: React.FC<BlogPostViewProps> = ({
  post,
  previous,
  next,
}) => {
  const title = getBlogPostTitle(post)
  const description = getBlogPostDescription(post)
  const authors = getBlogPostAuthors(post)
  const { minutes } = useReadingTime(post.body)
  const body = post.body ?? DummyText
  const tags = post.tags ?? ["No tags."]

  return (
    <div className="relative mx-auto max-w-7xl bg-white px-4 py-16 sm:px-6 md:justify-between lg:px-8 lg:pb-28 lg:pt-8">
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
                  <a
                    className="float-left"
                    href={`/blog/post/${previous.slug}`}
                    rel="prev"
                  >
                    ← {previous.title}
                  </a>
                </li>
              )}
              {next && (
                <li className="p-0">
                  <a
                    className="float-right"
                    href={`/blog/post/${next.slug}`}
                    rel="next"
                  >
                    {next.title} →
                  </a>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </div>
  )
}

export default BlogPostView
