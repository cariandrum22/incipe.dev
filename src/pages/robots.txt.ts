import { renderRobotsTxt } from "../lib/staticArtifacts"

export const GET = () =>
  new Response(renderRobotsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
