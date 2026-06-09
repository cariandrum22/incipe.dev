import { describe, expect, it } from "vitest"
import { uniqueAuthors, uniqueTags } from "./content"
import type { BlogPost } from "../types/content"

const createPost = (post: Partial<BlogPost>): BlogPost => ({
  body: "",
  ...post,
})

describe("content helpers", () => {
  it("deduplicates tags while preserving first-seen order", () => {
    const posts = [
      createPost({ tags: ["nixos", "astro"] }),
      createPost({ tags: ["astro", "pnpm"] }),
      createPost({}),
    ]

    expect(uniqueTags(posts)).toEqual(["nixos", "astro", "pnpm"])
  })

  it("deduplicates authors by identity and keeps the latest author data", () => {
    const takafumi = { identity: "cariandrum22", name: "Takafumi Asano" }
    const posts = [
      createPost({ authors: [takafumi] }),
      createPost({
        authors: [
          { identity: "cariandrum22", name: "Duplicate" },
          { name: "Anonymous" },
          { identity: "guest", name: "Guest" },
        ],
      }),
    ]

    expect(uniqueAuthors(posts)).toEqual([
      { identity: "cariandrum22", name: "Duplicate" },
      { identity: "guest", name: "Guest" },
    ])
  })
})
