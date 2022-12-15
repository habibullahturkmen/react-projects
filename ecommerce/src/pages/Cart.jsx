import React from "react";
import {Context} from "../context/Context.jsx";
import CartItem from "../components/CartItem.jsx";

function Cart() {

    const {cartItems} = React.useContext(Context);
    const cartItemElements = cartItems.map(item => {
        return <CartItem key={item.id} item={item} />
    });

    const totalCost = (cartItems.length * 5.99);
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    );
}

export default Cart;
