import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import StyledMDXComponent from "../components/StyledMDXComponent"

const Contents: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPage(title: { eq: "Environments" }) {
        title
        body {
          body
        }
      }
    }
  `)

  return (
    <div className="prose relative mx-auto max-w-7xl bg-white px-4 pb-20 pt-16 sm:px-6 md:justify-between lg:px-8 lg:pb-28 lg:pt-24">
      <h1 className="border-b border-slate-500 pb-4 text-2xl text-slate-700">
        {data.contentfulPage.title}
      </h1>
      {StyledMDXComponent(data.contentfulPage.body.body)}
    </div>
  )
}

const Environments: React.FC = () => <Contents />

export default Environments
