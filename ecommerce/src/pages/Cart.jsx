import React from "react";
import {Context} from "../context/Context.jsx";
import CartItem from "../components/CartItem.jsx";

function Cart() {

    const [buttonText, setButtonText] = React.useState("Place Order");
    const {cartItems, emptyCart} = React.useContext(Context);

    const cartItemElements = cartItems.map(item => {
        return <CartItem key={item.id} item={item} />
    });

    const totalCost = (cartItems.length * 5.99);
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

    function placeOrder() {
        setButtonText("Ordering...");
        setTimeout(() => {
            console.log("Order placed!");
            setButtonText("Place Order");
            emptyCart();
        }, 3000);
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                {
                    cartItems.length > 0
                        ? <button onClick={placeOrder}>{buttonText}</button>
                        : <p>You have no items in your cart.</p>
                }
            </div>
        </main>
    );
}

export default Cart;
