import { describe, expect, it } from "vitest"
import { siteMetadata } from "../config/siteMetadata"
import { buildSeoData } from "./seo"

describe("buildSeoData", () => {
  it("builds default metadata with the site title template", () => {
    const seo = buildSeoData({ title: "Article" })

    expect(seo.defaultTitle).toBe(siteMetadata.title)
    expect(seo.lang).toBe("en")
    expect(seo.title).toBe("Article")
    expect(seo.titleTemplate).toBe(`%s | ${siteMetadata.title}`)
    expect(seo.meta).toContainEqual({
      name: "description",
      content: siteMetadata.description,
    })
    expect(seo.meta).toContainEqual({
      property: "og:title",
      content: "Article",
    })
  })

  it("uses explicit language, description, image, and appends custom meta", () => {
    const seo = buildSeoData({
      title: "記事",
      lang: "ja",
      description: "説明",
      image: "/hero.jpg",
      meta: [{ name: "robots", content: "noindex" }],
    })

    expect(seo.lang).toBe("ja")
    expect(seo.meta).toContainEqual({
      property: "og:image",
      content: "/hero.jpg",
    })
    expect(seo.meta).toContainEqual({
      name: "twitter:description",
      content: "説明",
    })
    expect(seo.meta.at(-1)).toEqual({ name: "robots", content: "noindex" })
  })
})
