import React from "react";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-grid-container">
        <img src="photo-grid.png" alt="grid" className="hero-grid" />
      </div>
      <div className="hero-text-container">
        <h1 className="hero-head">Online Experience</h1>
        <p className="hero-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
export default Hero;
