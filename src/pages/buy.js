import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { checkout } from "../checkout"

const IndexPage = () => {
  const sku = document.location.search.match(/(?:sku=)(.*)/)[1];

  checkout(sku);
  return (
    <Layout>
      <SEO title="Checkout" />
    </Layout>
  );
};

export default IndexPage
