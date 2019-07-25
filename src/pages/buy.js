import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { checkout } from "../checkout"

const IndexPage = () => {
  if (global.document) {
    const sku = global.document.location.search.match(/(?:sku=)(.*)/)[1];
    checkout(sku);
  }
  return (
    <Layout>
      <SEO title="Checkout" />
    </Layout>
  );
};

export default IndexPage
