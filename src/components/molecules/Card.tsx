import React from "react"
import Image from "../atoms/Image"
import ReadingTime from "../atoms/ReadingTime"
import Date from "../atoms/Date"
import { blogAuthorPath, blogPostPath, blogTagPath } from "../../lib/routes"
import type { BlogPost } from "../../types/content"

type Props = {
  post: BlogPost
}

const Card: React.FC<Props> = ({ post }) => (
  <div
    key={post.title}
    className="flex flex-col overflow-hidden rounded-lg shadow-lg"
  >
    <div className="shrink-0">
      {post.heroImage && (
        <Image
          className="h-48 w-full object-cover"
          alt={post.heroImage.description ?? ""}
          image={post.heroImage}
        />
      )}
    </div>
    <div className="flex flex-1 flex-col justify-between bg-white p-6">
      <div className="flex-1">
        {post.tags?.map(tag => (
          <p className="text-sm font-medium text-indigo-600" key={tag}>
            <a href={blogTagPath(tag)} className="hover:underline">
              {tag}
            </a>
          </p>
        ))}
        <a href={blogPostPath(post)} className="mt-2 block">
          <p className="text-xl font-semibold text-gray-900">{post.title}</p>
          <p className="mt-3 text-base text-gray-500">{post.description}</p>
        </a>
      </div>
      <div className="mt-6 flex items-center">
        {post.authors?.map(author => (
          <div className="shrink-0" key={author?.name}>
            <a href={blogAuthorPath(author)}>
              <span className="sr-only">{author?.name}</span>
              {author?.picture && (
                <Image
                  className="h-10 w-10 rounded-full"
                  alt={author.picture.description ?? ""}
                  image={author.picture}
                />
              )}
            </a>
          </div>
        ))}
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">
            {post.authors?.map(author => (
              <a
                href={blogAuthorPath(author)}
                className="hover:underline"
                key={author?.name}
              >
                {author?.name}
              </a>
            ))}
          </p>
          <div className="flex space-x-1 text-sm text-gray-500">
            <Date>{String(post.publishedOn)}</Date>
            <span aria-hidden="true">&middot;</span>
            <ReadingTime>{post.body}</ReadingTime>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
