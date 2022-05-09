import type { GatsbyConfig } from "gatsby"
import * as path from "path"
import * as dotenv from "dotenv"

dotenv.config({
  path: `.env.${process.env.NODE_ENV}.local`,
})

const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
)

const myId = `cariandrum22`

const config: GatsbyConfig = {
  siteMetadata: {
    title: `incipe.dev`,
    siteUrl: `https://incipe.dev/`,
    description: `This site is for personal experimentation and portfolio.`,
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
      resolve: `gatsby-plugin-typegen`,
      options: {
        outputPath: `src/@types/__generated__/gatsby-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `HASURA`,
        fieldName: `hasura`,
        url: `https://incipe.hasura.app/v1/graphql`,
        headers: {
          "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
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
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Fira Code`, `Noto Sans Japanesez`],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-svgr-svgo`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        rulePaths: [gatsbyRequiredRules],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "public", ".cache"],
        stages: ["develop"],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        gtmAuth: process.env.GOOGLE_TAGMANAGER_AUTH,
        gtmPreview: process.env.GOOGLE_TAGMANAGER_PREVIEW,
        dataLayerName: "dataLayer",
      },
    },
  ],
}

export default config
