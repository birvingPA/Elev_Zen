import * as React from "react"
import { DividerContainer } from "../styled"
export default class DividerTextWithLogo extends React.Component {
  render() {
    console.log(this.props)
    const { text, logo } = this.props
    return (
      <DividerContainer>
        {logo}
        {text}
      </DividerContainer>
    )
  }
}
