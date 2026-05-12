import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import JourneyPlanner from "./components/JourneyPlanner/JourneyPlanner";
import "./App.css";
import RouteComparison from "./components/RouteComparison/RouteComparison";
import RoutePreview from "./components/RoutePreview/RoutePreview";
import { RouteOffIcon } from "lucide-react";
import Rewards from "./components/Rewards/Rewards";
import ImpactBanner from "./components/ImpactBanner/ImpactBanner";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Leaderboard from "./components/Leaderboard/Leaderboard";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <JourneyPlanner />
      <RouteComparison />
      <RoutePreview />
      <Rewards />
     <ImpactBanner />
     <HowItWorks />
     <Leaderboard />
    </div>
  );
}

export default App;