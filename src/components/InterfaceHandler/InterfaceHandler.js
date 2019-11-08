import React, { useContext } from "react"
import { Context } from "../context"

import Layout from "../Layout"
import MainPage from "../MainPage/MainPage"

const InterfaceHandler = () => {
  const [context] = useContext(Context)
  const { showGarden } = context

  let showInterface = <MainPage />

  if (showGarden) {
    showInterface = <>Garden interface</>
  }
  return <Layout>{showInterface}</Layout>
}

export default InterfaceHandler
