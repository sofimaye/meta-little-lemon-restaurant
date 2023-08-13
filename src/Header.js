import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const Hambutton = ({handleMenuToggle}) => {
    return(
        <button className="hamburger-button"
                onClick={handleMenuToggle}
                aria-label="Toggle Menu">
            <img src="/photos/🦆%20icon%20_hamburger%20menu_.svg"
                 alt="hamburger menu icon"/>
        </button>
    )
}

const VerticalMenu = ({handleMenuToggle}) => {
    return(
        <nav id="nav-links-mobile">
            <ul role="navigation">
                <li>
                    <NavLink className="navlink-mobile"
                             to="/"
                             activeClassName="active"
                             aria-label="Home"
                             onClick={handleMenuToggle} /* close menu when a link is clicked*/
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink className="navlink-mobile"
                             to="/about"
                             activeClassName="active"
                             aria-label="About"
                             onClick={handleMenuToggle}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navlink-mobile"
                             to="/menu"
                             activeClassName="active"
                             aria-label="Menu"
                             onClick={handleMenuToggle}
                    >
                        Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navlink-mobile"
                             to="/reservations"
                             activeClassName="active"
                             aria-label="Reservations"
                             onClick={handleMenuToggle}>
                        Reservations
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navlink-mobile"
                             to="/order"
                             activeClassName="active"
                             aria-label="Order Online"
                             onClick={handleMenuToggle}>
                        Order online
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navlink-mobile"
                             to="/login"
                             activeClassName="active"
                             aria-label="Login"
                             onClick={handleMenuToggle}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

const MobileNavbar = () => {
    const [closed, setOpen] = useState(true);
    const handleMenuToggle = () => {
       setOpen(prev => !prev)
    };

    return(
        <>
        {closed ? <Hambutton handleMenuToggle={handleMenuToggle}/> : <VerticalMenu handleMenuToggle={handleMenuToggle}/>}
        </>
    )
}
const Navbar = () => {
    return(
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
    )
}


function Header(){
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return(
            <header>
                { isMobile ? <MobileNavbar/> : <Navbar/>}
                <img id="logo" src="/photos/Logo.svg" alt="logo little lemon"/>
            </header>

    )
}

export {Header};
