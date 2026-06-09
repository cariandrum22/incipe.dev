type Nullable<T> = T | null | undefined

export type ContentImage = {
  contentType?: Nullable<string>
  description?: Nullable<string>
  height?: Nullable<number>
  title?: Nullable<string>
  url: string
  width?: Nullable<number>
}

export type ContentAuthor = {
  emailAddress?: Nullable<string>
  identity?: Nullable<string>
  name?: Nullable<string>
  picture?: Nullable<ContentImage>
  profile?: Nullable<string>
}

export type ContentfulExportMetadata = {
  contentType?: Nullable<string>
  entryId?: Nullable<string>
  updatedAt?: Nullable<string>
}

export type BlogPost = {
  authors?: Nullable<Array<ContentAuthor>>
  body: string
  contentful?: Nullable<ContentfulExportMetadata>
  description?: Nullable<string>
  heroImage?: Nullable<ContentImage>
  publishedOn?: Nullable<string>
  slug?: Nullable<string>
  tags?: Nullable<Array<string>>
  title?: Nullable<string>
}

export type BlogPostPreview = Pick<BlogPost, "slug" | "title">

export type PageContent = {
  body: string
  contentful?: Nullable<ContentfulExportMetadata>
  slug?: Nullable<string>
  title?: Nullable<string>
}
