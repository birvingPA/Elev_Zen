import * as React from "react"

class InfoBoxesComponent extends React.Component {
  render() {
    const {
      boxSize,
      boxColor,
      mr,
      ml,
      mt,
      md,
      text,
      title,
      preset,
      fontColor,
    } = this.props
    const style = {
      color: `${fontColor ? fontColor : "white"}`,
      marginRight: `${mr}`,
      marginLeft: `${ml}`,
      marginTop: `${mt}`,
      marginDown: `${md}`,
      height: boxSize,
      width: boxSize,
      backgroundColor: boxColor,
    }
    const presetTextRight = {
      width: "260px",
      padding: "2%",
      marginRight: "5%",
      marginTop: "11%",
      float: "right",
    }
    const presetTextLeft = {
      width: "260px",
      padding: "2%",
      marginLeft: "5%",
      marginTop: "11%",
      float: "left",
    }
    const presetTextCenter = {
      width: "300px",
      padding: "2%",
      paddingTop: "100px",
      margin: "auto",
    }
    const Presets = {
      presetTextCenter,
      presetTextLeft,
      presetTextRight,
    }

    return (
      <div style={style}>
        <div style={preset ? Presets[preset] : Presets["presetTextCenter"]}>
          <h1>{title}</h1>
          {text}
        </div>
      </div>
    )
  }
}
const InfoBoxes = () => <InfoBoxesComponent />
export default InfoBoxes
