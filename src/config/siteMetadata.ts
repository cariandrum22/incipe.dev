const myId = "cariandrum22"

export const siteMetadata = {
  title: "incipe.dev",
  siteUrl: "https://incipe.dev",
  description: "This is my personal portfolio and blog site.",
  author: {
    name: "Takafumi Asano",
    email: "cariandrum22@gmail.com",
    github: myId,
    twitter: myId,
    facebook: "takafumi.asano.1",
  },
} as const

export type SiteMetadata = typeof siteMetadata
