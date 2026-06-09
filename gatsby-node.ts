import { resolve } from "node:path"
import { NormalModuleReplacementPlugin, ProvidePlugin } from "webpack"
import { loadBlogPosts, loadPages } from "./src/lib/content"
import { buildSiteRouteData } from "./src/lib/routeData"
import type { CreateWebpackConfigArgs, GatsbyNode } from "gatsby"

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

const contentDirectory = resolve(__dirname, "src", "content")

const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions

  const postTemplate = resolve("./src/templates/Blog/Post.tsx")
  const postsTemplate = resolve("./src/templates/Blog/Posts.tsx")
  const pageTemplate = resolve("./src/templates/Page.tsx")

  const routeData = buildSiteRouteData({
    posts: loadBlogPosts(contentDirectory),
    pages: loadPages(contentDirectory),
  })

  routeData.blogPosts.forEach(route => {
    createPage({
      path: route.path,
      component: postTemplate,
      context: {
        post: route.post,
        previous: route.previous,
        next: route.next,
      },
    })
  })

  routeData.blogPostIndexes.forEach(route => {
    createPage({
      path: route.path,
      component: postsTemplate,
      context: {
        title: route.title,
        caption: route.caption,
        tag: route.tag,
        authorId: route.authorId,
        posts: route.posts,
      },
    })
  })

  routeData.pages.forEach(route => {
    createPage({
      path: route.path,
      component: pageTemplate,
      context: {
        page: route.page,
      },
    })
  })
}

export { onCreateWebpackConfig, createPages }
