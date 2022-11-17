import React from "react";
import Die from "./Die.jsx";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

const App = () => {

    const [dice, setDice] = React.useState(allNewDice());
    const [tenzies, setTenzies] = React.useState(false);

    React.useEffect(() => {
        const allDiceHeld = dice.every(die => die.isHeld);
        const firstDiceValue = dice[0].value;
        const allDiceIdenticalValues = dice.every(die => die.value === firstDiceValue);

        if (allDiceHeld && allDiceIdenticalValues) {
            setTenzies(true);
        }
    }, [dice]);

    function generateNewDie() {
        return {
            id: nanoid(),
            value: Math.ceil(Math.random() * 6),
            isHeld: false
        };
    }

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie());
        }
        return newDice;
    }

    function rollDice() {
        if (!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld
                    ? die
                    : generateNewDie()
            }));
        } else {
            setTenzies(false);
            setDice(allNewDice());
        }

    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id
                ? { ...die, isHeld: !die.isHeld }
                : die;
        }));
    }

    const diceArray = dice.map((die) => {
        return (
            <Die
                key={die.id}
                id={die.id}
                value={die.value}
                isHeld={die.isHeld}
                holdDice={holdDice}
            />
        );
    });

    return (
        <main className="main-container">
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same.
                Click each die to freeze it at its current value between rolls.
            </p>
            <div className="die-container">
                {diceArray}
            </div>
            <button className="roll-dice" onClick={rollDice} >{tenzies ? "New Game" : "Roll"}</button>
        </main>
  );
}

export default App;
