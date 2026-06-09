import React from "react"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import type { IGatsbyImageData } from "gatsby-plugin-image"
import type { ContentImage } from "../../types/content"

export type ImageData = IGatsbyImageData | ContentImage

type Props = {
  alt: string
  className?: string
  image: ImageData
}

const isGatsbyImageData = (image: ImageData): image is IGatsbyImageData =>
  "images" in image && "layout" in image

const Image: React.FC<Props> = ({ alt, className, image }) => {
  if (isGatsbyImageData(image)) {
    return <GatsbyImage alt={alt} className={className} image={image} />
  }

  return <img alt={alt} className={className} src={image.url} />
}

const getImageSrc = (image: ImageData) =>
  isGatsbyImageData(image) ? getSrc(image) : image.url

export { getImageSrc }
export default Image
