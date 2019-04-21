import PropTypes from "prop-types"
import React from "react"
import posed from "react-pose"

class ClickAnimation extends React.Component {
  render() {
    const ClickAnimation = posed.div({
      hoverable: true,
      pressable: true,
      init: {
        scale: 1,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      },
      hover: {
        scale: 1.2,
        boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
      },
      press: {
        scale: 1.1,
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
      },
    })
    const { children } = this.props
    return <ClickAnimation>{children}</ClickAnimation>
  }
}

ClickAnimation.propTypes = {
  children: PropTypes.any,
}

export default ClickAnimation
