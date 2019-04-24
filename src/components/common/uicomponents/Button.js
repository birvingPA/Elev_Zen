import PropTypes from "prop-types"
import React from "react"
import { ClickAnimation } from "../animations"
import { Button as BButton } from "../styled"

class Button extends React.Component {
  render() {
    const { children, onClick, color, noAnimation } = this.props
    const customColor = {
      backgroundColor: color,
    }
    return (
      <React.Fragment>
        {!noAnimation ? (
          <ClickAnimation style={customColor} onClick={() => onClick}>
            {children}
          </ClickAnimation>
        ) : (
          <BButton noAnimation style={customColor} onClick={() => onClick}>
            {children}
          </BButton>
        )}
      </React.Fragment>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
}

export default Button
