import typography from "@tailwindcss/typography"

export default {
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/templates/**/*.tsx",
    "./src/views/**/*.tsx",
    "./astro/**/*.astro",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", "Noto Sans Japanese"],
      },
    },
  },
  plugins: [typography],
}
