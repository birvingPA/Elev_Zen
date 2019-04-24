import * as React from "react"
import {
  HeaderText,
  DividerTextWithLogo,
  InfoBoxes,
  TextAndSideImage,
  RequestDemo,
} from "../common/uicomponents"
import { InfoBoxContainer } from "../common/styled"
import { FaDumbbell, FaClipboardList } from "react-icons/fa"

class HomeComponent extends React.Component {
  state = {
    isReady: false,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isReady: true })
    }, 50)
  }
  render() {
    return (
      <React.Fragment>
        {this.state.isReady && (
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
              <RequestDemo />
            </div>

            <DividerTextWithLogo
              logo={<FaDumbbell />}
              text={"WHY GO WITH ELEVZEN?"}
            />

            <InfoBoxContainer>
              <InfoBoxes
                preset="presetTextLeft"
                title="Acquire"
                text="
              Develop a brand, build your studio, and grow a following. Web and social 
              integrations plus lead management solutions take the pain out of getting leads 
              into your studio and converting first time users to active loyal members."
                mr="6%"
                boxColor="blue"
                boxSize={540}
              />
              <InfoBoxes
                preset="presetTextRight"
                title="Manage"
                text="
             Develop a brand, build your studio, and grow a following. Web and social 
             integrations plus lead management solutions take the pain out of getting leads 
             into your studio and converting first time users to active loyal members."
                mt="10%"
                boxColor="red"
                boxSize={500}
              />
            </InfoBoxContainer>
            <InfoBoxContainer>
              <InfoBoxes
                title="Build"
                text="
             Develop a brand, build your studio, and grow a following. Web and social 
             integrations plus lead management solutions take the pain out of getting leads 
             into your studio and converting first time users to active loyal members."
                mr="8%"
                boxColor="green"
                boxSize={500}
              />
              <InfoBoxes
                preset="presetTextLeft"
                title="Conquer"
                text="
             Develop a brand, build your studio, and grow a following. Web and social 
             integrations plus lead management solutions take the pain out of getting leads 
             into your studio and converting first time users to active loyal members."
                mt="8%"
                boxColor="purple"
                boxSize={500}
              />
            </InfoBoxContainer>
            <DividerTextWithLogo text={"You are in good hands!"} />
            <TextAndSideImage right />
            <TextAndSideImage />
            <TextAndSideImage right />
            <TextAndSideImage />
            <DividerTextWithLogo
              logo={<FaClipboardList />}
              text={"WHY GO WITH ELEVZEN?"}
            />
            <TextAndSideImage />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <RequestDemo />
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}
const Home = () => <HomeComponent />
export default Home
