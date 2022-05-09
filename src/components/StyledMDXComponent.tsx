import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer, MDXRendererProps } from "gatsby-plugin-mdx"

const StyledMDXComponent: React.FC<MDXRendererProps> = ({ children }) => (
  <MDXProvider
    components={{
      p: props => <p {...props} className="mx-auto mt-6 prose-slate" />,
      h1: props => (
        <h1
          {...props}
          className="mt-8 max-w-prose text-3xl font-normal tracking-tight leading-8 text-slate-800"
        />
      ),
      h2: props => (
        <h2
          {...props}
          className="mt-8 max-w-prose text-2xl font-normal tracking-tight leading-8 text-slate-700"
        />
      ),
      h3: props => (
        <h3
          {...props}
          className="mt-8 max-w-prose text-xl font-normal tracking-tight leading-8 text-slate-600"
        />
      ),
      h4: props => <h4 {...props} />,
      h5: props => <h5 {...props} />,
      h6: props => <h6 {...props} />,
      thematicBreak: props => <hr {...props} />,
      blockquote: props => <blockquote {...props} />,
      ul: props => <ul {...props} role="list" />,
      ol: props => <ol {...props} />,
      li: props => <li {...props} />,
      table: props => <table {...props} />,
      tr: props => <tr {...props} />,
      td: props => <td {...props} />,
      th: props => <th {...props} />,
      pre: props => <pre {...props} />,
      code: props => <code {...props} />,
      em: props => <em {...props} />,
      strong: props => <strong {...props} />,
      hr: props => <hr {...props} />,
      a: props => <a {...props} />,
      img: props => <img {...props} />,
    }}
  >
    <MDXRenderer>{children}</MDXRenderer>
  </MDXProvider>
)

export default StyledMDXComponent
