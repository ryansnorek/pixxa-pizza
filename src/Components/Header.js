import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1 className='logo'>PixxaPizza</h1>
            <nav>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/help'>Help</NavLink>
            </nav>
        </header>
    )
}

export default Header;