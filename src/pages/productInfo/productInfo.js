import * as React from "react"
import { HeaderText } from "../../components/common/uicomponents"
import { Nav, Navbar } from "react-bootstrap"
const ProductInfo = () => (
  <React.Fragment>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <HeaderText
        text="Products made for your fitness business"
        subText="Sleek and scalable. Glofox's products are built to make managing your business easy."
      />
    </div>
    <Navbar variant="light" sticky="top">
      <Nav.Link>Home</Nav.Link>
      <Nav.Link>Features</Nav.Link>
      <Nav.Link>Pricing</Nav.Link>
    </Navbar>
  </React.Fragment>
)

export default ProductInfo
