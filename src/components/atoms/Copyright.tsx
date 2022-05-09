import React from "react"

type Props = {
  license: Incipe.CreativeCommons.License
  children: string | undefined
}

const Copyright: React.FC<Props> = ({ license, children }) => (
  <div className="mt-8 md:order-1 md:mt-0">
    <p className="text-xs text-slate-900">
      Except where otherwise noted, this work is subject to a&nbsp;
      <a
        href={license.deed.toString()}
        className="text-slate-400 hover:text-slate-500"
      >
        Creative Commons {license.name} {license.version} license
      </a>
      . For details of exceptions will be noted on each page. &copy;2021&nbsp;
      {children} All rights reserved.
    </p>
  </div>
)

export default Copyright
