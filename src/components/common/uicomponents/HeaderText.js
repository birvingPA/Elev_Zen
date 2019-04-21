import PropTypes from "prop-types"
import React from "react"
// import { ClickAnimation } from "../animations"
import SplitText from "react-pose-text"

import { HeaderTextContainer, HeaderTextComponent } from "../styled"

class HeaderText extends React.Component {
  render() {
    const headerTextAnimation = {
      exit: { opacity: 0, y: 20 },
      enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 30,
      },
    }
    const subHeaderTextAnimation = {
      exit: { opacity: 0, y: 20 },
      enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 15,
      },
    }
    const { text, subText } = this.props
    return (
      <HeaderTextContainer>
        <HeaderTextComponent>
          <SplitText
            initialPose="exit"
            pose="enter"
            charPoses={headerTextAnimation}
          >
            {text}
          </SplitText>
        </HeaderTextComponent>
        <HeaderTextComponent subHeader>
          <SplitText
            initialPose="exit"
            pose="enter"
            charPoses={subHeaderTextAnimation}
          >
            {subText}
          </SplitText>
        </HeaderTextComponent>
      </HeaderTextContainer>
    )
  }
}

HeaderText.propTypes = {
  text: PropTypes.string,
  subText: PropTypes.string,
}

export default HeaderText
