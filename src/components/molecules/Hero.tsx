import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

type Props = {
  image?: IGatsbyImageData
  title: string
  content?: string
}

const Hero: React.FC<Props> = ({ image, title, content }) => (
  <div>
    {image && (
      <GatsbyImage
        alt={title}
        image={image}
        className="object-cover w-full h-96"
      />
    )}
    <div className="pt-10">
      <h1 className="pb-4 text-2xl text-slate-700 border-b border-slate-500">
        {title}
      </h1>
      {content && <p className="py-6 pl-2 text-sm text-slate-600">{content}</p>}
    </div>
  </div>
)

export default Hero
