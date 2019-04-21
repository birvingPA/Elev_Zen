import PropTypes from "prop-types"
import React from "react"
import { ClickAnimation } from "../animations"
import { Button as BButton } from "../styled"

class Button extends React.Component {
  render() {
    const { children, onClick, color } = this.props
    const customColor = {
      backgroundColor: color,
    }
    return (
      <ClickAnimation>
        <BButton style={customColor} onClick={() => onClick}>
          {children}
        </BButton>
      </ClickAnimation>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
}

export default Button
