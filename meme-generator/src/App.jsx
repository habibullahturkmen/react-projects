import React from "react";
import Navbar from "./components/Navbar";
import Meme from "./components/Meme";

const App = () => {
    return (
    <div className="main-container">
        <div className="container">
            <Navbar />
            <Meme />
        </div>
    </div>
  );
}

export default App;
