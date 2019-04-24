import styled, { css } from "styled-components"
import { Form, Row } from "react-bootstrap"
import { theme } from "../../core"
import posed from "react-pose"

const ClickAnimation = {
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.2,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
}
export const Button = styled(posed.button(ClickAnimation))`
  border-color: ${theme.elevZenPrimaryColor};
  background-color: ${theme.elevZenPrimaryColor};
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :hover {
    background-color: ${theme.elevZenPrimaryHoverColor};
    border-color: ${theme.elevZenPrimaryHoverColor};
  }

  :active {
    border-color: ${theme.elevZenPrimaryHoverColor}!important;
    background-color: ${theme.elevZenPrimaryHoverColor}!important;
    transform: scale(0.95);
  }
`
export const HeaderTextContainer = styled.div`
  margin: 100px;
  text-align: center;
`

export const HeaderTextComponent = styled.h1`
  font-size: 60px;
  ${props =>
    props.subHeader &&
    css`
      opacity: 0.9;
      font-size: 21px;
      line-height: 32px;
      text-align: center;
      display: block;
      margin-top: 20px;
      width: auto;
      transform-origin: 50% 50%;
    `}
`

export const RequestDemoBar = styled.div`
  display: flex;
  white-space: nowrap;
  padding: 19px 36px 18px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.16);
  margin-bottom: 60px;
  margin-top: 47px;
  font-family: Soleil;
  z-index: 999;
  position: relative;
  justify-content: space-between;
`
export const RequestDemoInput = styled(Form.Control)`
  border: none;
  width: 80%;
`
export const DividerContainer = styled.div`
  border: none;
  margin-bottom: 92px;
  margin-top: 168px;
  padding-top: 20px;
  position: relative;
  text-align: center;
  font-size: 30px;
  svg {
    position: absolute;
    top: -46px;
    left: 50%;
    font-size: 46px;
    display: block;
    transform: translateX(-50%);
  }
`
export const InfoBoxContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const TextAndImageRow = styled(Row)`
  margin: 3%;
  justify-content: center;
`
export const TextAndImageContainer = styled.div`
  display: flex;
  width: 82%;
  justify-content: center;
`
