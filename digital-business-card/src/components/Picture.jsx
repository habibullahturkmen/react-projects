import React from "react";
import ProfileImage from "../assets/profile-img.jpg";

const Picture = () => {
    return (
        <>
            <img src={ProfileImage} alt="Profile Picture" className="picture" />
        </>
    );
}

export default Picture;
