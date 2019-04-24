import * as React from "react"
import { DividerContainer } from "../styled"
class DividerTextWithLogoComponent extends React.Component {
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
const DividerTextWithLogo = () => <DividerTextWithLogoComponent />
export default DividerTextWithLogo
