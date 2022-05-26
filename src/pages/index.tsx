import { navigate } from "gatsby"
import React, { useEffect } from "react"

const Contents: React.FC = () => {
  useEffect(() => {
    navigate("/blog/")
  })

  return (
    <div className="relative px-4 pt-16 pb-20 mx-auto max-w-7xl bg-white prose sm:px-6 md:justify-between lg:px-8 lg:pt-24 lg:pb-28">
      Under development.
    </div>
  )
}

const Index: React.FC = () => <Contents />

export default Index
