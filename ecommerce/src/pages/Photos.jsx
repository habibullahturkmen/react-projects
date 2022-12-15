import React from "react";

import Image from "../components/Image";
import {getClass} from "../utils/utils.js";
import {Context} from "../context/Context.jsx";
import {v4 as uuidv4} from "uuid";

function Photos() {

    const {photos} = React.useContext(Context);
    const imageElements = photos.map((image, index) => (
        <Image
            key={uuidv4()}
            img={image}
            className={getClass(index)}
        />
    ));

    return (
        <main className="photos">
            {imageElements}
        </main>
    );
}

export default Photos;
