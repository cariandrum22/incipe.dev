import { renderSitemapIndexXml } from "../lib/staticArtifacts"

export const GET = () =>
  new Response(renderSitemapIndexXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
