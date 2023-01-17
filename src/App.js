import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css";
import data from "./data";

function App() {
  const dataFile = data.map((item) => {
    return (
      <Card
        coverImg={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  console.log(dataFile);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {dataFile}
    </div>
  );
}

export default App;
