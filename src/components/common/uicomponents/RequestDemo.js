import * as React from "react"
import { RequestDemoBar, RequestDemoInput } from "../styled"
import { Button } from "./"

class RequestDemo extends React.Component {
  render() {
    return (
      <RequestDemoBar>
        <RequestDemoInput placeholder="Please Enter An Email" type="email" />
        <Button>Request Demo</Button>
      </RequestDemoBar>
    )
  }
}

export default RequestDemo
