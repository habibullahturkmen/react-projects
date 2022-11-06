import React from "react";
import PhotoGrid from "../../public/images/photo-grid.png";

const Hero = () => {
    return (
        <section className="hero-container">
            <img src={PhotoGrid} alt="photo-grid" className="hero-image" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}

export default Hero;
