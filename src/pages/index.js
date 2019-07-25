import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Checkout from "../components/checkout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Checkout />
  </Layout>
)

export default IndexPage
