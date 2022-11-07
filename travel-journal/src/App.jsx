import React from "react";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import data from "./data";

const App = () => {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        );
    });

    const hr = <hr/>;
    let cardsWithHr = [];
    let counter = 0;
    for (let i = 0, j = 0; i < cards.length + 2; i++, j++) {
        if (i % 2 === 1) {
            cardsWithHr.push(hr);
        } else {
            cardsWithHr.push(cards[counter]);
            counter++;
        }
    }

    return (
    <div className="main-container">
        <div className="container">
            <Navbar />
            {cardsWithHr}
        </div>
    </div>
  )
}

export default App;
