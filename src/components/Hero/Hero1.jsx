import "./Hero.css";
import { heroData } from "../../data/homeData";
import liverpoolWaterfront from "../../assets/images/liverpool-waterfront.png";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT SIDE */}
      <div className="hero-left">

        <p className="hero-small-text">
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
            {heroData.primaryButton}
          </button>

          <button className="hero-secondary-button">
            {heroData.secondaryButton}
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">

        {/* Main visual area */}
        <div className="hero-visual"
          style={{ backgroundImage: `url(${liverpoolWaterfront})` }}>
            

          <div className="hero-circle hero-circle-1"></div>
          <div className="hero-circle hero-circle-2"></div>
          <div className="hero-circle hero-circle-3"></div>

          {/* Floating impact card */}
          <div className="impact-card">
            <p className="impact-title">
              {heroData.impactTitle}
            </p>

            <h3 className="impact-value">
              {heroData.impactValue}
            </h3>

            <p className="impact-subtext">
              {heroData.impactSubtext}
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;