import React from "react";
import {Context} from "../context/Context.jsx";
import * as PropTypes from "prop-types";

function Image({className, img}) {

    const [isHovered, setIsHovered] = React.useState(false);
    const {toggleFavorite, addToCart, cartItems} = React.useContext(Context);

    const heartIcon = () => {
        return img.isFavorite
            ? <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
            : isHovered
                ? <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
                : "";
    };

    const cartIcon = () => {
        if (cartItems.find(item => item.id === img.id)) {
            return <i className="ri-shopping-cart-fill cart"></i>;
        } else if (isHovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>;
        }
    };

    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={img.url}
                className="image-grid"
                alt="Items"
            />
            {heartIcon()}
            {cartIcon()}
        </div>
    );
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
};

export default Image;
