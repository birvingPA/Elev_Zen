import * as React from "react"
import { TextAndImageContainer, TextAndImageRow } from "../styled"
import { Button } from "./"
import { Col } from "react-bootstrap"

class TextAndSideImageComponent extends React.Component {
  render() {
    const { right } = this.props
    return (
      <TextAndImageRow>
        <TextAndImageContainer>
          {right && (
            <React.Fragment>
              <Col md="6">
                <h1 style={{ fontSize: "51px" }}>Title</h1>
                <p>
                  Lorem ipsum dolor sit amet, A quality web link sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur..
                </p>
                <Button>Find out more!</Button>
              </Col>
              <Col md="6">
                <img
                  alt="text"
                  src="http://s1.picswalls.com/wallpapers/2015/09/27/yoga-desktop-backgrounds_024615906_279.jpg"
                  style={{
                    float: "right",
                    width: "542px",
                    height: "575px",
                  }}
                />
              </Col>
            </React.Fragment>
          )}
          {!right && (
            <React.Fragment>
              <Col md="6">
                <img
                  alt="text"
                  src="http://s1.picswalls.com/wallpapers/2015/09/27/yoga-desktop-backgrounds_024615906_279.jpg"
                  style={{
                    float: "left",
                    width: "542px",
                    height: "575px",
                  }}
                />
              </Col>
              <Col md="6">
                <h1 style={{ fontSize: "51px" }}>Title</h1>
                <p>
                  Lorem ipsum dolor sit amet, A quality web link sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur..
                </p>
                <Button>Find out more!</Button>
              </Col>
            </React.Fragment>
          )}
        </TextAndImageContainer>
      </TextAndImageRow>
    )
  }
}
const TextAndSideImage = () => <TextAndSideImageComponent />

export default TextAndSideImage
