import React from "react";
import Twitter from "../assets/Twitter-Icon.jpg";
import Facebook from "../assets/Facebook-Icon.jpg";
import Instagram from "../assets/Instagram-Icon.jpg";
import Github from "../assets/Github-Icon.jpg";

const Footer = () => {
    return (
        <div className="footer-container">
            <img src={Twitter} alt="Twitter Logo" className="footer-logo" />
            <img src={Facebook} alt="Facebook Logo" className="footer-logo" />
            <img src={Instagram} alt="Instagram Logo" className="footer-logo" />
            <img src={Github} alt="Github Logo" className="footer-logo" />
        </div>
    );
}

export default Footer;
