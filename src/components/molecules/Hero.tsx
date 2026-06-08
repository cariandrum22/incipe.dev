import React from "react"
import Image from "../atoms/Image"
import type { ImageData } from "../atoms/Image"

type Props = {
  image?: ImageData
  title: string
  content?: string
}

const Hero: React.FC<Props> = ({ image, title, content }) => (
  <div>
    {image && (
      <Image
        alt={title}
        image={image}
        className="h-96 w-full object-cover"
      />
    )}
    <div className="pt-10">
      <h1 className="border-b border-slate-500 pb-4 text-2xl text-slate-700">
        {title}
      </h1>
      {content && <p className="py-6 pl-2 text-sm text-slate-600">{content}</p>}
    </div>
  </div>
)

export default Hero
