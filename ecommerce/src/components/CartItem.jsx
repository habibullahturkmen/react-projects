import React from "react";
import {Context} from "../context/Context.jsx";
import * as PropTypes from "prop-types";
import useHover from "../hooks/useHover.js";

function CartItem(props) {

    const [isHovered, ref] = useHover();
    const {removeFromCart} = React.useContext(Context);

    return (
        <div className="cart-item">
            <i
                className={`ri-delete-bin-${isHovered ? "fill" : "line"}`}
                onClick={() => removeFromCart(props.item.id)}
                ref={ref}
            ></i>
            <img src={props.item.url} width="130px"  alt="Item" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
};

export default CartItem
