#!/usr/bin/env node

import { copyFile, mkdir } from "node:fs/promises"
import path from "node:path"
import process from "node:process"

const outputRoot = path.resolve(
  process.env["ASTRO_OUTPUT_DIR"] ?? "output/astro",
)
const notFoundHtml = path.join(outputRoot, "404.html")
const notFoundRouteDirectory = path.join(outputRoot, "404")

await mkdir(notFoundRouteDirectory, { recursive: true })
await copyFile(notFoundHtml, path.join(notFoundRouteDirectory, "index.html"))

console.log("Astro compatibility routes are present.")
