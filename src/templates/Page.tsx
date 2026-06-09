import React from "react"
import StyledMDXComponent from "../components/StyledMDXComponent"
import type { PageContent } from "../types/content"

type Props = {
  pageContext: {
    page: PageContent
  }
}

const Page: React.FC<Props> = ({ pageContext }) => (
  <div className="prose relative mx-auto max-w-7xl bg-white px-4 pb-20 pt-16 sm:px-6 md:justify-between lg:px-8 lg:pb-28 lg:pt-24">
    <h1 className="border-b border-slate-500 pb-4 text-2xl text-slate-700">
      {pageContext.page.title}
    </h1>
    {StyledMDXComponent(pageContext.page.body)}
  </div>
)

export default Page
