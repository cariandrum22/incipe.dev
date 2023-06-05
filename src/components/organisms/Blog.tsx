import React from "react"
import Card from "../molecules/Card"

type Props = {
  title: string
  caption: string
  children: Array<Queries.ContentfulPost>
}

const Blog: React.FC<Props> = ({ title, caption, children }) => (
  <div className="relative mx-auto max-w-7xl bg-white px-4 pb-20 pt-16 sm:px-6 md:justify-between lg:px-8 lg:pb-28 lg:pt-24">
    <div className="absolute inset-0">
      <div className="h-1/3 bg-white sm:h-2/3" />
    </div>
    <div className="relative mx-auto max-w-7xl">
      <div className="text-center">
        <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-500 sm:mt-4">
          {caption}
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        {children.map(post => (
          <Card post={post} key={post.slug} />
        ))}
      </div>
    </div>
  </div>
)

export default Blog
