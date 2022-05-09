module.exports = {
  content: ["./src/**/*.tsx", "./purs/**/*.purs"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", "Noto Sans Japanese"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
