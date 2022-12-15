import React from "react";
import {Context} from "../context/Context.jsx";

function CartItem(props) {

    const {removeFromCart} = React.useContext(Context);

    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removeFromCart(props.item.id)}></i>
            <img src={props.item.url} width="130px"  alt="Item" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem
