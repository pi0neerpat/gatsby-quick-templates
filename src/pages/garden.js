import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Your Garden" />
    <h1>Your garden</h1>
    <p>Currently growing</p>
    <p>2 trees per month</p>
    <Link to="/">Back to home</Link>
  </Layout>
)

export default SecondPage
