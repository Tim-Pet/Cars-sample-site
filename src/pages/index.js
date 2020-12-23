import  React from "react"
import Header from "../components/header/header.js"

import LpPicture from "../components/lpPicture/lpPicture"
import "./root.scss"

// markup
const IndexPage = () => {
  return (
    <div>
      <title>Landingpage</title>
      <Header />
      <LpPicture />
    </div>
  )
}

export default IndexPage
