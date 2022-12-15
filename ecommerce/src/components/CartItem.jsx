import React from "react";
import {Context} from "../context/Context.jsx";

function CartItem(props) {

    const [hovered, setHovered] = React.useState(false);
    const {removeFromCart} = React.useContext(Context);

    return (
        <div className="cart-item">
            <i
                className={`ri-delete-bin-${hovered ? "fill" : "line"}`}
                onClick={() => removeFromCart(props.item.id)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            ></i>
            <img src={props.item.url} width="130px"  alt="Item" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem
