import * as React from "react"
import { HeaderText } from "../../../components/common/uicomponents"

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <HeaderText
            text=" Fit for business, fit for life"
            subText="Go beyond just managing and build a fitness following that lasts. 
            Glofox software gives you the power to grow your boutique studio."
          />
        </div>
      </React.Fragment>
    )
  }
}
export default Home
