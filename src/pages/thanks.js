import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Thanks for your order!" />
    <h1>Thanks for your order!</h1>
    <p>Your order <b>#34013</b> has been placed. You will receive an email with your receipt all the shipping details.</p>
    <a href="https://tromerogarcia-1.pinterdev.com/nicegoodstuffm19/">Go back to the store</a>
  </Layout>
)

export default SecondPage
