import { renderSitemapXml } from "../lib/staticArtifacts"

export const GET = () =>
  new Response(renderSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
