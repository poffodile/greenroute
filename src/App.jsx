import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import JourneyPlanner from "./components/JourneyPlanner/JourneyPlanner";
import "./App.css";
import RouteComparison from "./components/RouteComparison/RouteComparison";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <JourneyPlanner />
      <RouteComparison />
    </div>
  );
}

export default App;