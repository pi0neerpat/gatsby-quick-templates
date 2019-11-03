import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page 2" />
    <h1>Page 2</h1>
    <p>Some text...</p>
    <Link to="/">Back to home</Link>
  </Layout>
)

export default SecondPage
