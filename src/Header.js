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
};

const Crossbutton = ({ handleMenuToggle }) => {
    return(
        <div className="cross-button-container">
            <button className="cross-button"
                onClick={handleMenuToggle}
                aria-label="Cross Menu"
            >
               <img src="/photos/cross-23.svg" alt="cross button"/>
            </button>
        </div>
    )
}

const VerticalMenu = ({ handleMenuToggle }) => {
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/menu", label: "Menu" },
        { to: "/reservations", label: "Reservations" },
        { to: "/order", label: "Order online" },
        { to: "/login", label: "Login" },
    ];

    return (
        <nav id="nav-links-mobile">
            <Crossbutton handleMenuToggle={handleMenuToggle} />
            <ul role="navigation">
                {navLinks.map((link) => (
                    <li key={link.to}>
                        <NavLink
                            className="navlink-mobile"
                            to={link.to}
                            aria-label={link.label}
                            onClick={handleMenuToggle}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};


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
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/menu", label: "Menu" },
        { to: "/reservations", label: "Reservations" },
        { to: "/order", label: "Order online" },
        { to: "/login", label: "Login" },
    ];

    return (
        <nav id="nav-links">
            <ul role="navigation">
                {navLinks.map((link) => (
                    <li key={link.to}>
                        <NavLink
                            className="navlink"
                            to={link.to}
                            aria-label={link.label}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};



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
