import React from "react"
import PageView from "../views/PageView"
import type { PageContent } from "../types/content"

type Props = {
  pageContext: {
    page: PageContent
  }
}

const Page: React.FC<Props> = ({ pageContext }) => (
  <PageView page={pageContext.page} />
)

export default Page
