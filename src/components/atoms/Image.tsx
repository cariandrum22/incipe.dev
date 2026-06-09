import React from "react"
import type { ContentImage } from "../../types/content"

export type ImageData = ContentImage

type Props = {
  alt: string
  className?: string
  image: ImageData
}

const Image: React.FC<Props> = ({ alt, className, image }) => (
  <img
    alt={alt}
    className={className}
    height={image.height ?? undefined}
    src={image.url}
    width={image.width ?? undefined}
  />
)

const getImageSrc = (image: ImageData) => image.url

export { getImageSrc }
export default Image
