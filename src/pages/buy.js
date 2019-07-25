import React, { useState, useEffect } from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

import { checkout } from "../checkout"

const IndexPage = () => {
  useEffect(() => {
    if (window.document) {
      const param = window.document.location.search.match(/(?:sku=)(.*)/);
      if (param) {
        checkout(param[1]);
      }
    }
  });

  return (
    <Layout>
      <SEO title="Checkout" />
    </Layout>
  );
};

export default IndexPage
