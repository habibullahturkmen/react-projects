import React from "react";
import { Link } from "react-router-dom";
import {Context} from "../context/Context.jsx";

function Header() {

    const {cartItems} = React.useContext(Context);
    const cartCondition = cartItems.length > 0 ? "fill" : "line";

    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart"><i className={`ri-shopping-cart-${cartCondition} ri-fw ri-2x`}></i></Link>
        </header>
    );
}

export default Header;
