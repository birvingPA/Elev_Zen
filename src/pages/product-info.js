import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductInfo from "../components/productInfo/productInfo"

const SecondPage = () => (
  <Layout>
    <SEO title="product" />
    <ProductInfo />

    <div style={{ height: 7000 }} />
  </Layout>
)

export default SecondPage
