import React from "react";
import {NavLink} from "react-router-dom";

function Header(){
    return(
            <header>
                <img id="logo" src="/photos/Logo.svg" alt="logo little lemon"/>
                <nav id="nav-links">
                    <ul role="navigation">
                        <li>
                            <NavLink className="navlink" to="/" activeClassName="active" aria-label="Home">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" to="/about" activeClassName="active" aria-label="About">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" to="/menu" activeClassName="active" aria-label="Menu">
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" to="/reservations" activeClassName="active" aria-label="Reservations">
                                Reservations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" to="/order" activeClassName="active" aria-label="Order Online">
                                Order online
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" to="/login" activeClassName="active" aria-label="Login">
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

    )
}

export default Header;
