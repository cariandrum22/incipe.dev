import { navigate } from "gatsby"
import React, { useEffect } from "react"
import IndexView from "../views/IndexView"

const Index: React.FC = () => {
  useEffect(() => {
    navigate("/blog/")
  }, [])

  return <IndexView />
}

export default Index
