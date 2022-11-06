import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import data from "./data";

function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        );
    });

  return (
    <div className="container">
        <Navbar />
        <Hero />
        <div className="main-card-container">
            {cards}
        </div>
    </div>
  );
}

export default App;
