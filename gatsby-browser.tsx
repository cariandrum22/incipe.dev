/* eslint-disable import/prefer-default-export */

import "./styles/styles.css"
import "prismjs/themes/prism-twilight.css"
import "katex/dist/katex.min.css"
import React from "react"
import Layout from "./src/components/Layout"

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export { wrapPageElement }
