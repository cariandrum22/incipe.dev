import React from "react"
import { graphql } from "gatsby"
import Blog from "../../components/organisms/Blog"

type Props = {
  data: {
    posts: {
      nodes: Array<Queries.ContentfulPost>
    }
  }
  pageContext: {
    title: string
    caption: string
  }
}

const Posts: React.FC<Props> = ({ data, pageContext }) => (
  <Blog title={pageContext.title} caption={pageContext.caption}>
    {data.posts.nodes}
  </Blog>
)

const query = graphql`
  query Posts($tag: [String], $authorId: String) {
    posts: allContentfulPost(
      sort: { fields: publishedOn, order: DESC }
      filter: {
        authors: { elemMatch: { identity: { eq: $authorId } } }
        tags: { in: $tag }
      }
    ) {
      nodes {
        slug
        title
        description {
          description
        }
        heroImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
          resize(height: 630, width: 1200) {
            src
          }
        }
        body {
          body
        }
        tags
        authors {
          identity
          name
          picture {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 1280
            )
            resize(height: 250, width: 250) {
              src
            }
          }
        }
        publishedOn
      }
    }
  }
`

export default Posts
export { query }
