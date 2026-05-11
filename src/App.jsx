import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import JourneyPlanner from "./components/JourneyPlanner/JourneyPlanner";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <JourneyPlanner />
    </div>
  );
}

export default App;