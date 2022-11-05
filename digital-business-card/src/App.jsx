import React from "react";
import Picture from "./components/Picture.jsx";
import Details from "./components/Details.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div className="main-container">
            <div className="container">
                <Picture />
                <Details />
                <Footer />
            </div>
        </div>
    );
}

export default App;
