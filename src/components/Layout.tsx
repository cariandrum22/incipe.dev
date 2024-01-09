import React from "react"

import Header from "./organisms/Header"
import Footer from "./organisms/Footer"
import useSiteMetadata from "../hooks/useSiteMetadata"

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const siteMetadata = useSiteMetadata()

  return (
    <div className="bg-white">
      <Header title={siteMetadata?.title || ""} />
      {children}
      {siteMetadata?.author && <Footer author={siteMetadata.author} />}
    </div>
  )
}

export default Layout
