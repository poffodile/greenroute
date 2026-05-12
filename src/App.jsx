import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import JourneyPlanner from "./components/JourneyPlanner/JourneyPlanner";
import RouteComparison from "./components/RouteComparison/RouteComparison";
import RoutePreview from "./components/RoutePreview/RoutePreview";
import Rewards from "./components/Rewards/Rewards";
import ImpactBanner from "./components/ImpactBanner/ImpactBanner";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Leaderboard from "./components/Leaderboard/Leaderboard";
// import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [selectedRouteId, setSelectedRouteId] = useState(2);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <JourneyPlanner />

      <RouteComparison
        selectedRouteId={selectedRouteId}
        setSelectedRouteId={setSelectedRouteId}
      />

      <RoutePreview selectedRouteId={selectedRouteId} />

      <Rewards />
      <ImpactBanner />
      <HowItWorks />
      <Leaderboard />
      {/* <Footer /> */}
    </div>
  );
}

export default App;