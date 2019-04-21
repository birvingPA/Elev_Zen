import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ProductPage } from "./productPage/productPage"

const SecondPage = () => (
  <Layout>
    <SEO title="product" />
    <ProductPage />

    <div style={{ height: 7000 }} />
  </Layout>
)

export default SecondPage
