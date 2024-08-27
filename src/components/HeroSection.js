import React from "react";
import '../assets/styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlay">
        <h2 className="hero-title">Welcome to <strong>REEFGUARD</strong></h2>
        <p className="hero-subtitle">Early Warning System in Coral Conservation</p>
      </div>
    </div>
  );
};

export default HeroSection;