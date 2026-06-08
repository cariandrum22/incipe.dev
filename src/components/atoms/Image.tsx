import React from "react"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import type { IGatsbyImageData } from "gatsby-plugin-image"

export type ImageData = IGatsbyImageData

type Props = {
  alt: string
  className?: string
  image: ImageData
}

const Image: React.FC<Props> = ({ alt, className, image }) => (
  <GatsbyImage alt={alt} className={className} image={image} />
)

const getImageSrc = (image: ImageData) => getSrc(image)

export { getImageSrc }
export default Image
