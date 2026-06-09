import type { GatsbyConfig } from "gatsby"
import * as dotenv from "dotenv"
import { siteMetadata } from "./src/config/siteMetadata"

dotenv.config({
  path: `.env.${process.env["NODE_ENV"]}.local`,
  quiet: true,
})

type SiteMap = {
  allSitePage: { nodes: Array<SitePage> }
}

type SitePage = {
  path: string
}

const googleFontsCSSAPI = `https://fonts.googleapis.com/css2`

const config: GatsbyConfig = {
  graphqlTypegen: true,
  siteMetadata,
  plugins: [
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
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
        `,
        resolvePages: ({ allSitePage: { nodes: allPages } }: SiteMap) =>
          allPages,
        serialize: ({ path: pagePath }: SitePage) => ({
          url: pagePath,
        }),
      },
    },
    `gatsby-plugin-robots-txt`,
  ],
}

export default config
