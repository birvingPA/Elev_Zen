import styled, { css } from "styled-components"
import { Button as BButton } from "react-bootstrap"
import { theme } from "../../core"

export const Button = styled(BButton)`
  border-color: ${theme.elevZenPrimaryColor};
  background-color: ${theme.elevZenPrimaryColor};
  :hover {
    background-color: ${theme.elevZenPrimaryHoverColor};
    border-color: ${theme.elevZenPrimaryHoverColor};
  }
  :active {
    border-color: ${theme.elevZenPrimaryHoverColor}!important;
    background-color: ${theme.elevZenPrimaryHoverColor}!important;
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
