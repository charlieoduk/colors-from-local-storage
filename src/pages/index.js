import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { theme } from "../Utils/global-styles/theme"

const ColoredBox = styled.div`
  background-color: ${theme.colorsFromLocalStorage.primary};
  height: 50vh;
  width: 50vw;
  padding: 50px;
  h2 {
    color: ${theme.colorsFromLocalStorage.secondary};
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>The box below should change color on refresh</h1>
    <ColoredBox>
      <h2>This is the secondary color</h2>
    </ColoredBox>
  </Layout>
)

export default IndexPage
