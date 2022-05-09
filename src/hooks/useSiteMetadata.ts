import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetaDataQuery>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author {
              name
              email
              github
              twitter
              facebook
            }
          }
        }
      }
    `
  )
  return site?.siteMetadata
}

export default useSiteMetadata
