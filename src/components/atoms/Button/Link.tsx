import React from "react"

type Props = {
  href: string
  className?: string
  children: string
}

const Link: React.FC<Props> = ({ href, className, children }) => (
  <a
    href={href}
    className={`inline-block py-2 px-4 border border-transparent rounded-md text-base font-medium ${className}`}
  >
    {children}
  </a>
)

export default Link
