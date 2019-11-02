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
      <Title>Make your DAI work to plant trees</Title>
      <p>Withdraw your money anywhere</p>
      <Button>1 tree per year</Button>
      <Button>1 tree per month</Button>
      <Button>1 tree per week</Button>
      <Button>Plant your tree</Button>
      <Link to="/garden/">Go to garden</Link>
    </Container>
  </Layout>
)

export default IndexPage
