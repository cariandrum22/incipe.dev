import React from "react"

type Props = {
  links: Incipe.Links
  className: string
}

const Links: React.FC<Props> = ({ links, className }) => (
  <div className={className}>
    {links.map(l => (
      <a
        key={l.name}
        href={l.href.toString()}
        className="text-base font-medium text-slate-900 hover:text-slate-500"
      >
        {l.name}
      </a>
    ))}
  </div>
)

export default Links
