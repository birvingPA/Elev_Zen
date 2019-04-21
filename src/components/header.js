import PropTypes from "prop-types"
import React from "react"
import { Button } from "./common/uicomponents"
import { Col, Container, Nav } from "react-bootstrap"
import { Title, Link, Theme, Row } from "./styled"

const Header = ({ siteTitle }) => {
  return (
    <Theme>
      <Container>
        <Row className="justify-content-end">
          <div style={{ marginRight: "3%" }}>
            <Button>Request Demo</Button>
          </div>
          <div style={{ marginRight: "3%" }}>
            <Button>Request Demo</Button>
          </div>
        </Row>
        <Row>
          <Col lg="4">
            <Title>
              <Link to="/">{siteTitle}</Link>
            </Title>
          </Col>
          <Col lg="8">
            <Nav className="justify-content-end">
              <Nav.Item>
                <Link to="/product-info/">Who is this for?</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/product-info/">Product</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/product-info/">Prices</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/product-info/">Resources</Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Theme>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
