import React from "react";
import Email from "../assets/email.jpg";
import LinkedIn from "../assets/Linkedin-icon.jpg";

const Details = () => {
    return (
        <>
            <div className="info">
                <p className="name">Laura Smith</p>
                <p className="job-title">Frontend Developer</p>
                <p className="website">laurasmith.website</p>
            </div>
            <div className="contact-container">
                <div className="contact-email">
                    <img src={Email} alt="Email"/>
                    <p>Email</p>
                </div>
                <div className="contact-linkedin">
                    <img src={LinkedIn} alt="LinkedIn"/>
                    <p>LinkedIn</p>
                </div>
            </div>
            <div className="about-and-interests-container">
                <div className="about">
                    <h3>About</h3>
                    <p>
                        I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                    </p>
                </div>
                <div className="interests">
                    <h3>Interests</h3>
                    <p>
                        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Details;
