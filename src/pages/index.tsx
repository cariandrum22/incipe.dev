import { navigate } from "gatsby"
import React, { useEffect } from "react"

const Contents: React.FC = () => {
  useEffect(() => {
    navigate("/blog/")
  })

  return (
    <div className="prose relative mx-auto max-w-7xl bg-white px-4 pb-20 pt-16 sm:px-6 md:justify-between lg:px-8 lg:pb-28 lg:pt-24">
      Under development.
    </div>
  )
}

const Index: React.FC = () => <Contents />

export default Index
