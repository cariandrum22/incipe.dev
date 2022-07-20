import React from "react"
import { graphql, Link } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
import useReadingTime from "../../hooks/useReadingTime"
import SEO from "../../components/SEO"
import Tags from "../../components/atoms/Tags"
import Hero from "../../components/molecules/Hero"
import StyledMDXComponent from "../../components/StyledMDXComponent"
import DummyText from "../../constants/Dummy/Text"

type Props = {
  data: {
    post: GatsbyTypes.ContentfulPost
    previous: GatsbyTypes.ContentfulPost
    next: GatsbyTypes.ContentfulPost
  }
}

const Post: React.FC<Props> = props => {
  const { post, previous, next } = props.data

  const title = post.title ?? "No title."
  const description = post.description?.description ?? "No description given."
  const authors = ((): string => {
    const names = post.authors?.map(author => author?.name)
    if (names) return names.join(", ")
    return "John Due"
  })()
  const { minutes } = useReadingTime(post.body?.body ?? "No body.")
  const image = post.heroImage?.gatsbyImageData
  const body = post.body?.childMdx?.body ?? DummyText
  const tags = (post.tags as Array<string>) ?? ["No tags."]

  return (
    <div className="relative py-16 px-4 mx-auto max-w-7xl bg-white sm:px-6 md:justify-between lg:px-8 lg:pt-8 lg:pb-28">
      <SEO title={title} description={description} image={getSrc(image)} />
      <Hero image={image} title={title} content={description} />
      <div className="flex justify-between items-center">
        <Tags tags={tags} />
        <div className="text-base font-thin text-slate-700">
          {authors} &middot;&nbsp;
          <time dateTime={post.updatedAt}>{post.updatedAt}</time> – {minutes}{" "}
          minute read
        </div>
      </div>
      <div className="max-w-full prose">
        <div>
          <StyledMDXComponent>{body}</StyledMDXComponent>
        </div>
        {(previous || next) && (
          <nav>
            <ul className="flow-root py-6 px-0 text-base font-thin list-none text-slate-700">
              {previous && (
                <li className="p-0">
                  <Link
                    className="float-left"
                    to={`/blog/post/${previous.slug}`}
                    rel="prev"
                  >
                    ← {previous.title}
                  </Link>
                </li>
              )}
              {next && (
                <li className="p-0">
                  <Link
                    className="float-right"
                    to={`/blog/post/${next.slug}`}
                    rel="next"
                  >
                    {next.title} →
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </div>
  )
}

const query = graphql`
  query PostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    post: contentfulPost(slug: { eq: $slug }) {
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
        childMdx {
          body
        }
        body
      }
      tags
      authors {
        name
      }
      publishedOn(formatString: "MMMM Do, YYYY")
      rawDate: publishedOn
    }
    previous: contentfulPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`

export default Post
export { query }
