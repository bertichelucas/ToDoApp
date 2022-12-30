import React from 'react'
import './styles/navbar.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='header'>
            <Link to={"/todo"}>To Do List</Link>
            <Link to={"/check"}>Check List</Link>
        </div>
    )
}

export default Header