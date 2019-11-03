import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Button = styled.button`
  width: 150px;
  height: 80px;
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Container = styled.section`
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Title>Home</Title>
      <p>Some text...</p>
      <Button>Do Something</Button>
      <Link to="/pagetwo/">Go to Page 2</Link>
    </Container>
  </Layout>
)

export default IndexPage
