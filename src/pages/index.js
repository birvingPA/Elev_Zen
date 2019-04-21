import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Home from "./home/home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Home />

    <div style={{ height: 7000 }} />
    {/* <Image /> */}
  </Layout>
)

export default IndexPage
