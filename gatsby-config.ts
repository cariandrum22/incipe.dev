import type { GatsbyConfig } from "gatsby"
import * as dotenv from "dotenv"

dotenv.config({
  path: `.env.${process.env["NODE_ENV"]}.local`,
})

type SiteMap = {
  allSitePage: { nodes: object }
  allContentfulPost: { nodes: object }
}

const myId = `cariandrum22`
const googleFontsCSSAPI = `https://fonts.googleapis.com/css2`

const config: GatsbyConfig = {
  graphqlTypegen: true,
  siteMetadata: {
    title: `incipe.dev`,
    siteUrl: `https://incipe.dev`,
    description: `This is my personal portfolio and blog site.`,
    author: {
      name: `Takafumi Asano`,
      email: `cariandrum22@gmail.com`,
      github: myId,
      twitter: myId,
      facebook: `takafumi.asano.1`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env["CONTENTFUL_SPACE_ID"],
        accessToken: process.env["CONTENTFUL_ACCESS_TOKEN"],
        host:
          process.env["NODE_ENV"] === "production"
            ? `cdn.contentful.com`
            : `preview.contentful.com`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `HASURA`,
        fieldName: `hasura`,
        url: `https://incipe.hasura.app/v1/graphql`,
        headers: {
          "x-hasura-admin-secret": process.env["HASURA_ADMIN_SECRET"],
        },
      },
    },
    `gatsby-plugin-purescript`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        content: [`gatsby-ssr.ts`, `src/**.*.tsx`, `purs/**/*.purs`],
        tailwind: true,
        purgeOnly: [`styles/styles.css`],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        mode: `async`,
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        web: [
          {
            name: `Fira Code`,
            file: `${googleFontsCSSAPI}?family=Fira+Code`,
          },
          {
            name: `Noto Sans Japanese`,
            file: `${googleFontsCSSAPI}?family=Noto+Sans+JP`,
          },
        ],
      },
    },
    `gatsby-plugin-svgr-svgo`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env["GOOGLE_TAGMANAGER_ID"],
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        gtmAuth: process.env["GOOGLE_TAGMANAGER_AUTH"],
        gtmPreview: process.env["GOOGLE_TAGMANAGER_PREVIEW"],
        dataLayerName: "dataLayer",
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        query SiteMap {
          allSitePage {
            nodes {
              path
            }
          }
          allContentfulPost {
            nodes {
              publishedOn
              slug
            }
          }
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
        `,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allContentfulPost: { nodes: allContentfulNodes },
        }: SiteMap) => {
          const contentfulNodeMap = allContentfulNodes.reduce((acc, node) => {
            const pagePath = `/blog/post/${node.slug}/`
            acc[pagePath] = node

            return acc
          }, {})

          return allPages.map(page => ({
            ...page,
            ...contentfulNodeMap[page.path],
          }))
        },
        serialize: ({ path: pagePath, publishedOn }) => ({
          url: pagePath,
          lastmodISO: publishedOn,
        }),
      },
    },
    `gatsby-plugin-robots-txt`,
  ],
}

export default config
