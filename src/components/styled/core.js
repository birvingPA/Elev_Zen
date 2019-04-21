import styled from "styled-components"
import { Link as Llink } from "gatsby"
import { theme } from "../core"
import { Container, Row as RRow } from "react-bootstrap"
export const HeaderContainer = styled.header`
  margin-bottom: 1.45rem;

  a {
    color: black;
    text-decoration: none;
  }
`
export const TitleContainer = styled.div`
  margin: 0px auto;
  height: 300px;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

export const Title = styled.h1`
  margin: 0;
`
export const Link = styled(Llink)`
  display: block;
  padding: 0.5rem 1rem;
`
export const Main = styled(Container)`
  color: ${theme.elevZenPrimaryColor};
`
export const Theme = styled.div`
  a {
    color: ${theme.elevZenPrimaryColor};
    text-decoration: none;
    :hover {
      color: ${theme.elevZenPrimaryHoverColor};
    }
  }
`
export const Row = styled(RRow)`
  margin-top: 2%;
`
