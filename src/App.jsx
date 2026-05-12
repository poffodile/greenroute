import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import JourneyPlanner from "./components/JourneyPlanner/JourneyPlanner";
import "./App.css";
import RouteComparison from "./components/RouteComparison/RouteComparison";
import RoutePreview from "./components/RoutePreview/RoutePreview";
import { RouteOffIcon } from "lucide-react";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <JourneyPlanner />
      <RouteComparison />
      <RoutePreview />
    </div>
  );
}

export default App;