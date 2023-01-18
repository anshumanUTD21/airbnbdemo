import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css";
import data from "./data";

function App() {
  const dataFile = data.map((item) => {
    return (
      <Card
        key={item.id}
        coverImg={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  console.log(dataFile);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-list">{dataFile}</section>
    </div>
  );
}

export default App;
