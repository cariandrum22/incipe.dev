import React from "react"

import Header from "./organisms/Header"
import Footer from "./organisms/Footer"
import { siteMetadata } from "../config/siteMetadata"

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-white">
      <Header title={siteMetadata.title} />
      {children}
      <Footer author={siteMetadata.author} />
    </div>
  )
}

export default Layout
