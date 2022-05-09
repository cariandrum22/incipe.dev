import React from "react"

type Props = {
  text: string
  href?: string
  logo?: React.FC
}

const Logo: React.FC<Props> = ({ text, href, logo }) => {
  const isPresent: boolean = logo !== undefined
  return (
    <a href={href ?? "/"}>
      <span className={isPresent ? "sr-only" : "text-xl text-slate-900"}>
        {text}
      </span>
      {isPresent ?? logo}
    </a>
  )
}

export default Logo
