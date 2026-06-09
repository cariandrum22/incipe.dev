import js from "@eslint/js"
import typescript from "typescript-eslint"
import typescriptParser from "@typescript-eslint/parser"
import prettier from "eslint-config-prettier"
import globals from "globals"
import importPlugin from "eslint-plugin-import"
import jsxA11y from "eslint-plugin-jsx-a11y"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import tailwindcss from "eslint-plugin-tailwindcss"

const tsconfigRootDir = new URL(".", import.meta.url).pathname

export default [
  {
    ignores: [
      ".astro/",
      ".cache/",
      ".spago/",
      "node_modules/",
      "output/",
      "public/",
    ],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
  js.configs.recommended,
  typescript.configs.eslintRecommended,
  ...typescript.configs.strict,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  jsxA11y.flatConfigs.recommended,
  ...tailwindcss.configs["flat/recommended"],
  {
    files: ["**/*.{js,mjs,ts,tsx}"],
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
        tsconfigRootDir,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "import/no-unresolved": "off",
      "tailwindcss/enforces-shorthand": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["src/components/StyledMDXComponent.tsx"],
    rules: {
      "jsx-a11y/heading-has-content": "off",
    },
  },
  {
    files: [
      "*.config.{js,mjs,ts}",
      "astro.config.mjs",
      "eslint.config.mjs",
      "postcss.config.js",
      "tailwind.config.mjs",
      "vitest.config.ts",
      "scripts/**/*.mjs",
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
    },
  },
  {
    files: ["./src/@types/**/*.d.ts"],
    rules: {
      "@typescript-eslint/no-shadow": ["off"],
    },
  },
  prettier,
]
