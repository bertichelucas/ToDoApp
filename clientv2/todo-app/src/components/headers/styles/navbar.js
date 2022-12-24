import styled from "styled-components"
import * as palette from "../../../cssvariables.js"

export const NavBar = styled.nav`
    display: flex;
    border: 1px solid blue;
    align-items: center;
    height: 10vh;
    background-color: ${palette.PRIMARY};
    width:100vw;
`

export const TitleNav = styled.h2`
    margin-left: 2vw;
`