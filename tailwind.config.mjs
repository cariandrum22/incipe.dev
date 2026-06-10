import typography from "@tailwindcss/typography"

export default {
  content: [
    "./src/components/**/*.tsx",
    "./src/views/**/*.tsx",
    "./src/**/*.astro",
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
