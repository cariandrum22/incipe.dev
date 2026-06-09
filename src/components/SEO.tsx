import * as React from "react"
import { Helmet } from "react-helmet"
import { buildSeoData } from "../lib/seo"
import type { SeoInput } from "../lib/seo"

const SEO: React.FC<SeoInput> = props => {
  const seo = buildSeoData(props)

  return (
    <Helmet
      htmlAttributes={{
        lang: seo.lang,
      }}
      title={seo.title}
      defaultTitle={seo.defaultTitle}
      titleTemplate={seo.titleTemplate}
      meta={seo.meta}
    />
  )
}

export default SEO
