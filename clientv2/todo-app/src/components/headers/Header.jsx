import React from 'react'
import {NavBar, TitleNav} from './styles/navbar'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        
            <NavBar>
                <TitleNav>BUENAS</TitleNav>
                <Link to={"/todo"}>To Do List</Link>
            </NavBar>
    
    )
}

export default Header