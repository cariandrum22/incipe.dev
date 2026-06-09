import { defineConfig } from "astro/config"
import react from "@astrojs/react"

export default defineConfig({
  integrations: [react()],
  outDir: "./output/astro",
  publicDir: "./static",
  srcDir: "./astro",
})
