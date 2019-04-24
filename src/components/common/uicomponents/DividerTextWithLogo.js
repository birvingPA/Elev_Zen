import * as React from "react"
import { DividerContainer } from "../styled"
class DividerTextWithLogo extends React.Component {
  render() {
    const { text, logo } = this.props
    return (
      <DividerContainer>
        {logo}
        {text}
      </DividerContainer>
    )
  }
}

export default DividerTextWithLogo
