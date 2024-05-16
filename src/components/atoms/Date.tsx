import React from "react"
import { toZonedTime } from "date-fns-tz"
import { format as formatDate } from "date-fns"

type Props = {
  format?: string
  children: string
}

const Date: React.FC<Props> = ({ format = "LLL d, yyy", children }) => {
  const dateWithZone = toZonedTime(children, "Asia/Tokyo")
  return (
    <time dateTime={dateWithZone.toLocaleDateString()}>
      {formatDate(dateWithZone, format)}
    </time>
  )
}

export default Date
