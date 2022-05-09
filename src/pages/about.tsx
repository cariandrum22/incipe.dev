import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import StyledMDXComponent from "../components/StyledMDXComponent"

const Contents: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPage(title: { eq: "About" }) {
        title
        body {
          childMdx {
            body
          }
        }
      }
    }
  `)
  return (
    <div className="relative px-4 pt-16 pb-20 mx-auto max-w-7xl bg-white prose sm:px-6 md:justify-between lg:px-8 lg:pt-24 lg:pb-28">
      <h1 className="pb-4 text-2xl text-slate-700 border-b border-slate-500">
        {data.contentfulPage.title}
      </h1>
      <StyledMDXComponent>
        {data.contentfulPage.body.childMdx.body}
      </StyledMDXComponent>
    </div>
  )
}

const About: React.FC = () => <Contents />

export default About
