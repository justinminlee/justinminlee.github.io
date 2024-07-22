import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>John Doe</h1>
      <h2>Data Analyst & Scientist</h2>
      <p>Turning data into actionable insights</p>
      <button className="cta-button">View Projects</button>
    </section>
  );
}

export default Hero;