import type { IGatsbyImageData } from "gatsby-plugin-image"

type Nullable<T> = T | null | undefined

export type ContentfulImage = {
  gatsbyImageData?: Nullable<IGatsbyImageData>
  resize?: Nullable<{
    src?: Nullable<string>
  }>
}

export type ContentfulAuthor = {
  identity?: Nullable<string>
  name?: Nullable<string>
  picture?: Nullable<ContentfulImage>
  profile?: Nullable<string>
}

export type ContentfulPost = {
  authors?: Nullable<Array<Nullable<ContentfulAuthor>>>
  body?: Nullable<{
    body?: Nullable<string>
  }>
  description?: Nullable<{
    description?: Nullable<string>
  }>
  heroImage?: Nullable<ContentfulImage>
  publishedOn?: Nullable<string>
  rawDate?: Nullable<string>
  slug?: Nullable<string>
  tags?: Nullable<Array<string>>
  title?: Nullable<string>
}
