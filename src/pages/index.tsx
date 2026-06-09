import { navigate } from "gatsby"
import React, { useEffect } from "react"
import { blogIndexPath } from "../lib/routes"
import IndexView from "../views/IndexView"

const Index: React.FC = () => {
  useEffect(() => {
    navigate(blogIndexPath)
  }, [])

  return <IndexView />
}

export default Index
