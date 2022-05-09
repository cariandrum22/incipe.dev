import React from "react"
import useReadingTime from "../../hooks/useReadingTime"

type Props = {
  children: string
}

const ReadingTime: React.FC<Props> = ({ children }) => {
  const { minutes } = useReadingTime(children)
  return <span>{minutes} min read</span>
}

export default ReadingTime
