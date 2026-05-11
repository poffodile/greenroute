import "./Hero.css";
import { heroData } from "../../data/homeData";
import image from "../../assets/images/image.png";
import { Leaf, PlayCircle } from "lucide-react";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-small-text">
          <Leaf size={16} />
          {heroData.smallText}
        </p>

        <h1 className="hero-title">
          {heroData.title}
        </h1>

        <p className="hero-subtitle">
          {heroData.subtitle}
        </p>

        <div className="hero-buttons">
          <button className="hero-primary-button">
            Plan Your Journey
            <Leaf size={18} />
          </button>

          <button className="hero-secondary-button">
            How It Works
            <PlayCircle size={20} />
          </button>
        </div>
      </div>

      <div className="impact-card">
        <p>{heroData.impactTitle}</p>
        <h3>{heroData.impactValue}</h3>
        <span>{heroData.impactSubtext}</span>
      </div>
    </section>
  );
}

export default Hero;