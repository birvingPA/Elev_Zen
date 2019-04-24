import PropTypes from "prop-types"
import React from "react"
import { Button } from "../styled"
class ClickAnimation extends React.Component {
  render() {
    const { children } = this.props
    return <Button>{children}</Button>
  }
}

ClickAnimation.propTypes = {
  children: PropTypes.any,
}

export default ClickAnimation
