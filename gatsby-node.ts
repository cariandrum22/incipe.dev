import { GatsbyNode, CreateWebpackConfigArgs } from "gatsby"
import { readdirSync, readFileSync } from "node:fs"
import { resolve } from "node:path"
import { NormalModuleReplacementPlugin, ProvidePlugin } from "webpack"
import type { BlogPost, PageContent } from "./src/types/content"

const onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    plugins: [
      new NormalModuleReplacementPlugin(/^node:/, resource => {
        resource.request = resource.request.replace(/^node:/, "")
      }),
      new ProvidePlugin({
        process: resolve(__dirname, "node_modules", "process/browser"),
      }),
    ],
    resolve: {
      fallback: {
        path: resolve(__dirname, "node_modules", "path-browserify"),
        process: resolve(__dirname, "node_modules", "process/browser"),
        url: resolve(__dirname, "node_modules", "url/"),
      },
    },
  })
}

type Frontmatter = Record<string, unknown>

type MdxDocument<TFrontmatter extends Frontmatter> = {
  body: string
  frontmatter: TFrontmatter
}

const blogCaption =
  "Grammatica loquitur, Dialectia vera docet, Rhetorica verba ministrat, Musica canit, Arithmetica munerat, Geometrica ponderat, Astronomica colit astra."

const contentDirectory = resolve(__dirname, "src", "content")

const readMdxCollection = <TFrontmatter extends Frontmatter>(
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

const loadBlogPosts = (): Array<BlogPost> =>
  readMdxCollection<Omit<BlogPost, "body">>("blog")
    .map(({ frontmatter, body }) => ({
      ...frontmatter,
      body,
    }))
    .sort((left, right) =>
      String(right.publishedOn ?? "").localeCompare(
        String(left.publishedOn ?? ""),
      ),
    )

const loadPages = (): Array<PageContent> =>
  readMdxCollection<Omit<PageContent, "body">>("pages").map(
    ({ frontmatter, body }) => ({
      ...frontmatter,
      body,
    }),
  )

const uniqueTags = (posts: Array<BlogPost>) =>
  Array.from(new Set(posts.flatMap(post => post.tags ?? [])))

const uniqueAuthors = (posts: Array<BlogPost>) =>
  Array.from(
    posts
      .flatMap(post => post.authors ?? [])
      .reduce((authors, author) => {
        if (author.identity) authors.set(author.identity, author)
        return authors
      }, new Map()),
  ).map(([, author]) => author)

const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions

  const postTemplate = resolve("./src/templates/Blog/Post.tsx")
  const postsTemplate = resolve("./src/templates/Blog/Posts.tsx")
  const pageTemplate = resolve("./src/templates/Page.tsx")

  const posts = loadBlogPosts()
  const pages = loadPages()

  posts.forEach((post, index) => {
    createPage({
      path: `/blog/post/${post.slug}/`,
      component: postTemplate,
      context: {
        post,
        previous: posts[index + 1] ?? null,
        next: posts[index - 1] ?? null,
      },
    })
  })

  createPage({
    path: `/blog/`,
    component: postsTemplate,
    context: {
      title: `Blog`,
      caption: blogCaption,
      posts,
    },
  })

  uniqueTags(posts).forEach(tag => {
    createPage({
      path: `/blog/tag/${tag}/`,
      component: postsTemplate,
      context: {
        title: `Tag: ${tag}`,
        tag,
        posts: posts.filter(post => post.tags?.includes(tag)),
      },
    })
  })

  uniqueAuthors(posts).forEach(author => {
    createPage({
      path: `/blog/author/${author.identity}/`,
      component: postsTemplate,
      context: {
        title: `Author: ${author.name}`,
        caption: author.profile,
        authorId: author.identity,
        posts: posts.filter(post =>
          post.authors?.some(
            postAuthor => postAuthor.identity === author.identity,
          ),
        ),
      },
    })
  })

  pages.forEach(page => {
    createPage({
      path: `/${page.slug}/`,
      component: pageTemplate,
      context: {
        page,
      },
    })
  })
}

export { onCreateWebpackConfig, createPages }
