import React, {useEffect, useState} from "react";
import Link from 'next/link';

const HamButton = ({handleMenuToggle}) => {
    return(
        <button className="hamburger-button"
                onClick={handleMenuToggle}
                aria-label="Toggle Menu">
            <img src="/photos/🦆%20icon%20_hamburger%20menu_.svg"
                 alt="hamburger menu icon"/>
        </button>
    )
};

const CrossButton = ({ handleMenuToggle }) => {
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
        { to: "/underConstruction", label: "About" },
        { to: "/underConstruction", label: "Menu" },
        { to: "/booking", label: "Booking" },
        { to: "/underConstruction", label: "Order online" },
        { to: "/underConstruction", label: "Login" },
    ];

    return (
        <nav id="nav-links-mobile">
            <CrossButton handleMenuToggle={handleMenuToggle} />
            <ul role="navigation">
                {navLinks.map((link) => (
                    <li key={link.to}>
                        <Link
                            className="navlink-mobile"
                            href={link.to}
                            aria-label={link.label}
                            onClick={handleMenuToggle}
                        >
                            {link.label}
                        </Link>
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
        {closed ? <HamButton handleMenuToggle={handleMenuToggle}/> : <VerticalMenu handleMenuToggle={handleMenuToggle}/>}
        </>
    )
}
const Navbar = () => {
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/underConstruction", label: "About" },
        { to: "/underConstruction", label: "Menu" },
        { to: "/booking", label: "Booking" },
        { to: "/underConstruction", label: "Order online" },
        { to: "/underConstruction", label: "Login" },
    ];

    return (
        <nav id="nav-links">
            <ul role="navigation">
                {navLinks.map((link) => (
                    <li key={link.to}>
                        <Link
                            className="navlink"
                            href={link.to}
                            aria-label={link.label}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};



export default function Header(){
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

