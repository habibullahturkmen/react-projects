import React, {useState} from "react";
import memesData from "../memesData";

const Meme = () => {

    const [url, setUrl] = useState("");
    const [inputValue1, setInputValue1] = useState("Top text");
    const [inputValue2, setInputValue2] = useState("Bottom text");
    const [txt1, setTxt1] = useState("");
    const [txt2, setTxt2] = useState("");

    const getRandomMeme = () => {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.round(Math.random() * 100);
        setUrl(memesArray[randomNumber].url);
    }

    const printText = () => {
        setTxt1(inputValue1);
        setTxt2(inputValue2);
    }

    const clickMe = () => {
        getRandomMeme();
        printText();
    }

    return (
        <div>
            <div className="form">
                <input
                    className="meme-input-a"
                    type="text"
                    placeholder={inputValue1}
                    onInput={event => setInputValue1(event.target.value)}
                />
                <input
                    className="meme-input-b"
                    type="text"
                    placeholder={inputValue2}
                    onInput={event => setInputValue2(event.target.value)}
                />
                <input
                    className="meme-button"
                    type="submit"
                    value={"Get a new meme image 🖼"}
                    onClick={clickMe}
                />
                <div
                    className="meme-image-container"
                    style={{
                        backgroundImage: `url(${url})`,
                        backgroundSize: 'cover'
                    }}>
                    <h1 className="txt1">{txt1}</h1>
                    <h1 className="txt2">{txt2}</h1>
                </div>
            </div>
        </div>
    );
}

export default Meme;
