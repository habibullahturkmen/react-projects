import React from "react";
import buttonImage from "../images/button-image.png";
/**
 * Challenge:
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
const Meme = () => {
    return (
        <div>
            <form action="">
                <input className="meme-input-a" type="text" placeholder="Shut up" />
                <input className="meme-input-b" type="text" placeholder="and take my money" />
                <input className="meme-button" type="submit" value={"Get a new meme image 🖼"} />

            </form>
        </div>
    );
}

export default Meme;
