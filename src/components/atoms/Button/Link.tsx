import React from "react"

type Props = {
  href: string
  className?: string
  children: string
}

const Link: React.FC<Props> = ({ href, className, children }) => (
  <a
    href={href}
    className={`inline-block rounded-md border border-transparent py-2 px-4 text-base font-medium ${className}`}
  >
    {children}
  </a>
)

export default Link
