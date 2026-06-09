import { describe, expect, it } from "vitest"
import {
  blogAuthorPathByIdentity,
  blogIndexPath,
  blogPostPathBySlug,
  blogTagPath,
  pagePathBySlug,
  requireRouteSegment,
  rootPath,
} from "./routes"

describe("route path helpers", () => {
  it("builds stable site routes", () => {
    expect(rootPath).toBe("/")
    expect(blogIndexPath).toBe("/blog/")
    expect(blogPostPathBySlug("post-slug")).toBe("/blog/post/post-slug/")
    expect(blogTagPath("nixos")).toBe("/blog/tag/nixos/")
    expect(blogAuthorPathByIdentity("cariandrum22")).toBe(
      "/blog/author/cariandrum22/",
    )
    expect(pagePathBySlug("about")).toBe("/about/")
  })

  it("rejects missing route segments", () => {
    expect(() => requireRouteSegment("slug", undefined)).toThrow(
      "slug must be a non-empty string.",
    )
    expect(() => requireRouteSegment("slug", "   ")).toThrow(
      "slug must be a non-empty string.",
    )
  })
})
