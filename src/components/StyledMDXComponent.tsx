import React from "react"
import * as runtime from "react/jsx-runtime"
import { evaluateSync } from "@mdx-js/mdx"
import { RunnerOptions } from "@mdx-js/mdx/lib/util/resolve-evaluate-options"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypePrism from "rehype-prism-plus"
import rehypeSlug from "rehype-slug"

type Props = JSX.IntrinsicAttributes &
  React.ClassAttributes<HTMLParagraphElement> &
  React.HTMLAttributes<HTMLParagraphElement>

const components = {
  p: (props: Props) => <p {...props} className="prose-slate mx-auto mt-6" />,
  h1: (props: Props) => (
    <h1
      {...props}
      className="mt-8 max-w-prose text-3xl font-normal leading-8 tracking-tight text-slate-800"
    />
  ),
  h2: (props: Props) => (
    <h2
      {...props}
      className="mt-8 max-w-prose text-2xl font-normal leading-8 tracking-tight text-slate-700"
    />
  ),
  h3: (props: Props) => (
    <h3
      {...props}
      className="mt-8 max-w-prose text-xl font-normal leading-8 tracking-tight text-slate-600"
    />
  ),
}

const defaultOptions = {
  remarkPlugins: [remarkGfm, remarkMath],
  rehypePlugins: [rehypeKatex, rehypePrism, rehypeSlug],
}

const StyledMDXComponent = (mdx: string, options = defaultOptions) => {
  const { default: Content } = evaluateSync(mdx, {
    ...(runtime as RunnerOptions),
    ...options,
  })
  return <Content components={components} />
}

export default StyledMDXComponent
