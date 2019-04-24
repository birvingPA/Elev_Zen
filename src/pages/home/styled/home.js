import styled from "styled-components"
import { Form, Row } from "react-bootstrap"

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
