module.exports = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/templates/**/*.tsx",
    "./purs/**/*.purs"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", "Noto Sans Japanese"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
