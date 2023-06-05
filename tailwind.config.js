module.exports = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/templates/**/*.tsx",
    "./purs/**/*.purs",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", "Noto Sans Japanese"],
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography")],
}
