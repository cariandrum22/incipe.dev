import React from "react"

type Props = {
  children: Incipe.SocialNetworkService.Links
}

const Links: React.FC<Props> = ({ children }) => (
  <div className="flex justify-center space-x-6 md:order-2">
    {children.map(l => (
      <a
        key={l.name}
        href={l.href}
        className="text-slate-400 hover:text-slate-500"
      >
        <span className="sr-only">{l.name}</span>
        <l.icon className="h-6 w-6" aria-hidden="true" />
      </a>
    ))}
  </div>
)

export default Links
