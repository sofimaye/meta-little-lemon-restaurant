import React from "react";
import {NavLink} from "react-router-dom";

function Header(){
    return(
            <header>
                <img id="logo" src="/photos/Logo.svg" alt="logo little lemon"/>
                <nav id="nav-links">
                    <ul>
                        <NavLink className="navlink" to="/" activeClassName="active">Home</NavLink>
                        <NavLink className="navlink" to="/about">About</NavLink>
                        <NavLink className="navlink" to="/menu">Menu</NavLink>
                        <NavLink className="navlink" to="/reservations">Reservations</NavLink>
                        <NavLink className="navlink" to="/order">Order online</NavLink>
                        <NavLink className="navlink" to="/login">Login</NavLink>
                    </ul>
                </nav>
            </header>

    )
}

export default Header;
