import typography from "@tailwindcss/typography"

export default {
  content: [
    "./src/components/**/*.tsx",
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
