import js from "@eslint/js"
import typescript from "typescript-eslint"
import typescriptParser from "@typescript-eslint/parser"
import prettier from "eslint-config-prettier"
import globals from "globals"
import react from "eslint-plugin-react"
import tailwindcss from "eslint-plugin-tailwindcss"

export default [
  js.configs.recommended,
  typescript.configs.eslintRecommended,
  ...typescript.configs.strict,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.eslint.json",
      },
    },
    plugins: {
      react: react,
      typescript: typescript,
      tailwindcss: tailwindcss,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...typescript.configs.recommended.rules,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["./src/@types/**/*.d.ts"],
    rules: {
      "@typescript-eslint/no-shadow": ["off"],
    },
  },
  {
    files: ["postcss.config.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },
  {
    ignores: [
      ".cache/",
      ".spago/",
      "public/",
      "output/"
    ],
  },
]
