import React from "react"

type Props = {
  tags: Array<string>
}

const Tags: React.FC<Props> = ({ tags }) => (
  <small className="inline font-thin text-slate-700">
    Tags:&nbsp;
    {tags.map((tag, index) => (
      <React.Fragment key={tag}>
        <a className="text-indigo-600" href={`/blog/tag/${tag}`}>
          {tag}
        </a>
        {index !== tags.length - 1 && " "}
      </React.Fragment>
    ))}
  </small>
)

export default Tags
