import { siteMetadata } from "../config/siteMetadata"

export type HtmlLang = "en" | "ja"

export type SeoMeta = {
  content?: string
  name?: string
  property?: string
}

export type SeoInput = {
  description?: string
  image?: string
  lang?: HtmlLang
  meta?: Array<SeoMeta>
  title: string
}

export type SeoData = {
  defaultTitle: string
  lang: HtmlLang
  meta: Array<SeoMeta>
  title: string
  titleTemplate: string | undefined
}

export const buildSeoData = ({
  lang = "en",
  title,
  description = "",
  meta = [],
  image,
}: SeoInput): SeoData => {
  const metaDescription = description || siteMetadata.description
  const defaultTitle = siteMetadata.title

  return {
    defaultTitle,
    lang,
    meta: [
      {
        name: "description",
        content: metaDescription,
      },
      {
        name: "image",
        content: image,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: metaDescription,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content: image,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:creator",
        content: siteMetadata.author.twitter,
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "twitter:description",
        content: metaDescription,
      },
      ...meta,
    ],
    title,
    titleTemplate: defaultTitle ? `%s | ${defaultTitle}` : undefined,
  }
}
