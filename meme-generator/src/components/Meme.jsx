import React from "react";

const Meme = () => {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])
    const [text, setText] = React.useState({
        topText: "",
        bottomText: ""
    })

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    const getMemeImage = () => {
        const randomNumber = Math.round(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    const printText = () => {
        setText({topText: meme.topText, bottomText: meme.bottomText})
    }

    const clickMe = () => {
        getMemeImage();
        printText();
    }

    const handleChange = event => {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div>
            <div className="form">
                <input
                    className="meme-input-a"
                    type="text"
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onInput={handleChange}
                />
                <input
                    className="meme-input-b"
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onInput={handleChange}
                />
                <input
                    className="meme-button"
                    type="submit"
                    value={"Get a new meme image 🖼"}
                    onClick={clickMe}
                />
                <div className="meme-image-container">
                    <img src={meme.randomImage} className="meme-image"  alt="Meme Image"/>
                    <h1 className="meme--text top">{text[0]}</h1>
                    <h1 className="meme--text bottom">{text[1]}</h1>
                </div>
            </div>
        </div>
    );
}

export default Meme;
