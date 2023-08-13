import React from "react";

function Footer(){
    return(
        <footer>
            <img src="/photos/footer_logo.png" alt="restaurant food"/>
            <address className="contacts">
                <ul>
                    <li><a href="mailto: littlelemon@gmail.com">littlelemon@gmail.com</a></li>
                    <li><a href="tel: +12345678">+12345678</a></li>
                </ul>
            </address>
            <address className="social-media-links">
                <ul>
                    <li><a href="#">facebook</a></li>
                    <li><a href="#">instagram</a></li>
                </ul>
            </address>
        </footer>
    )
}
export default Footer;