import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ReadingTime from "../atoms/ReadingTime"
import Date from "../atoms/Date"

type Props = {
  post: GatsbyTypes.ContentfulPost
}

const Card: React.FC<Props> = ({ post }) => (
  <div
    key={post.title}
    className="flex overflow-hidden flex-col rounded-lg shadow-lg"
  >
    <div className="shrink-0">
      <GatsbyImage
        className="object-cover w-full h-48"
        alt=""
        image={post.heroImage?.gatsbyImageData}
      />
    </div>
    <div className="flex flex-col flex-1 justify-between p-6 bg-white">
      <div className="flex-1">
        {post.tags?.map(tag => (
          <p className="text-sm font-medium text-indigo-600" key={tag}>
            <a href={`/blog/tag/${tag}`} className="hover:underline">
              {tag}
            </a>
          </p>
        ))}
        <a href={`/blog/post/${post.slug}`} className="block mt-2">
          <p className="text-xl font-semibold text-gray-900">{post.title}</p>
          <p className="mt-3 text-base text-gray-500">
            {post.description?.description}
          </p>
        </a>
      </div>
      <div className="flex items-center mt-6">
        {post.authors?.map(author => (
          <div className="shrink-0" key={author?.name}>
            <a href={`/blog/author/${author?.identity}`}>
              <span className="sr-only">{author?.name}</span>
              <GatsbyImage
                className="w-10 h-10 rounded-full"
                alt=""
                image={author?.picture?.gatsbyImageData}
              />
            </a>
          </div>
        ))}
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">
            {post.authors?.map(author => (
              <a
                href={`/blog/author/${author?.identity}`}
                className="hover:underline"
                key={author?.name}
              >
                {author?.name}
              </a>
            ))}
          </p>
          <div className="flex space-x-1 text-sm text-gray-500">
            <Date>{post.updatedAt as string}</Date>
            <span aria-hidden="true">&middot;</span>
            <ReadingTime>{post.body?.body as string}</ReadingTime>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
