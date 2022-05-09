import React from "react"

type Props = {
  tags: Array<string>
}

const Tags: React.FC<Props> = ({ tags }) => (
  <small className="inline font-thin text-slate-700">
    Tags:&nbsp;
    {tags.map(tag => (
      <a className="text-indigo-600" href={`/blog/tag/${tag}`} key={tag}>
        {tag}
      </a>
    ))}
  </small>
)

export default Tags
