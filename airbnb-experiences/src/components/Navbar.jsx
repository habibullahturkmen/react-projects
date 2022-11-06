import React from "react"
import Logo from "../../public/images/airbnb-logo.png";

export default function Navbar() {
    return (
        <nav className="nav-container">
            <img src={Logo} className="logo"  alt="React Logo"/>
        </nav>
    )
}
