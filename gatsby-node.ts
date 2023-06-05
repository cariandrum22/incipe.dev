/* eslint-disable import/prefer-default-export */

import { GatsbyNode } from "gatsby"
import { resolve } from "path"
import { forEach, map, flatten, uniq } from "lodash"

type ListOfPosts = {
  allContentfulPost: {
    nodes: [
      {
        title: string
        slug: string
        tags: Array<string>
        authors: [
          {
            identity: string
            name: string
            profile: string
          }
        ]
      }
    ]
  }
}

const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions

  const postTemplate = resolve("./src/templates/Blog/Post.tsx")
  const postsTemplate = resolve("./src/templates/Blog/Posts.tsx")

  const result: { errors?: Array<Error>; data?: ListOfPosts } = await graphql(
    `
      query ListOfPosts {
        allContentfulPost {
          nodes {
            title
            slug
            tags
            authors {
              identity
              name
              profile
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const posts = result.data!.allContentfulPost.nodes

  forEach(posts, (post, index) => {
    const previousPostSlug = index === 0 ? null : posts[index - 1]?.slug
    const nextPostSlug =
      index === posts.length - 1 ? null : posts[index + 1]?.slug

    createPage({
      path: `/blog/post/${post.slug}/`,
      component: postTemplate,
      context: {
        slug: post.slug,
        previousPostSlug,
        nextPostSlug,
      },
    })
  })

  createPage({
    path: `/blog/`,
    component: postsTemplate,
    context: {
      title: `Blog`,
      caption:
        "Grammatica loquitur, Dialectia vera docet, Rhetorica verba ministrat, Musica canit, Arithmetica munerat, Geometrica ponderat, Astronomica colit astra.",
    },
  })

  const tags = uniq(flatten(map(posts, post => post.tags)))
  const authors = uniq(flatten(map(posts, post => post.authors)))

  forEach(tags, tag => {
    createPage({
      path: `/blog/tag/${tag}/`,
      component: postsTemplate,
      context: {
        title: `Tag: ${tag}`,
        tag,
      },
    })
  })

  forEach(authors, author => {
    createPage({
      path: `/blog/author/${author.identity}/`,
      component: postsTemplate,
      context: {
        title: `Author: ${author.name}`,
        caption: author.profile,
        authorId: author.identity,
      },
    })
  })
}

export { createPages }
