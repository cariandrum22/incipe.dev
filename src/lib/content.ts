import { readdirSync, readFileSync } from "node:fs"
import { resolve } from "node:path"
import type { BlogPost, ContentAuthor, PageContent } from "../types/content"

type Frontmatter = Record<string, unknown>

type MdxDocument<TFrontmatter extends Frontmatter> = {
  body: string
  frontmatter: TFrontmatter
}

export const blogCaption =
  "Grammatica loquitur, Dialectia vera docet, Rhetorica verba ministrat, Musica canit, Arithmetica munerat, Geometrica ponderat, Astronomica colit astra."

export const defaultContentDirectory = resolve(process.cwd(), "src", "content")

export const loadBlogPosts = (
  contentDirectory = defaultContentDirectory,
): Array<BlogPost> =>
  readMdxCollection<Omit<BlogPost, "body">>(contentDirectory, "blog")
    .map(({ frontmatter, body }) => ({
      ...frontmatter,
      body,
    }))
    .sort((left, right) =>
      String(right.publishedOn ?? "").localeCompare(
        String(left.publishedOn ?? ""),
      ),
    )

export const loadPages = (
  contentDirectory = defaultContentDirectory,
): Array<PageContent> =>
  readMdxCollection<Omit<PageContent, "body">>(contentDirectory, "pages").map(
    ({ frontmatter, body }) => ({
      ...frontmatter,
      body,
    }),
  )

export const uniqueTags = (posts: Array<BlogPost>) =>
  Array.from(new Set(posts.flatMap(post => post.tags ?? [])))

export const uniqueAuthors = (posts: Array<BlogPost>) =>
  Array.from(
    posts
      .flatMap(post => post.authors ?? [])
      .reduce<Map<string, ContentAuthor>>((authors, author) => {
        if (author.identity) authors.set(author.identity, author)
        return authors
      }, new Map()),
  ).map(([, author]) => author)

const readMdxCollection = <TFrontmatter extends Frontmatter>(
  contentDirectory: string,
  collection: string,
): Array<MdxDocument<TFrontmatter>> => {
  const collectionDirectory = resolve(contentDirectory, collection)
  return readdirSync(collectionDirectory)
    .filter(fileName => fileName.endsWith(".mdx"))
    .map(fileName => {
      const file = readFileSync(resolve(collectionDirectory, fileName), "utf8")
      return parseMdxDocument<TFrontmatter>(file)
    })
}

const parseMdxDocument = <TFrontmatter extends Frontmatter>(
  file: string,
): MdxDocument<TFrontmatter> => {
  const match = /^---\n(?<frontmatter>[\s\S]*?)\n---\n?(?<body>[\s\S]*)$/u.exec(
    file,
  )
  if (!match?.groups) {
    throw new Error("MDX file is missing frontmatter.")
  }

  return {
    frontmatter: parseFrontmatter(match.groups["frontmatter"] ?? ""),
    body: match.groups["body"]?.trim() ?? "",
  }
}

const parseFrontmatter = <TFrontmatter extends Frontmatter>(
  frontmatter: string,
) =>
  Object.fromEntries(
    frontmatter
      .split("\n")
      .filter(line => line.trim().length > 0)
      .map(line => {
        const separatorIndex = line.indexOf(":")
        if (separatorIndex === -1) {
          throw new Error(`Invalid frontmatter line: ${line}`)
        }

        const key = line.slice(0, separatorIndex).trim()
        const value = line.slice(separatorIndex + 1).trim()
        return [key, JSON.parse(value)]
      }),
  ) as TFrontmatter
