import React from 'react';
import '../styles/Hero.css';

function Hero() {
  
  const navigateToProjects = () => {
    window.location.hash = 'projects';
  };

  return (
    <section className="hero">
      <h1>Justin Lee</h1>
      <h2>Data science student at QUT</h2>
      <p>...</p>
      <button className="cta-button" onClick={navigateToProjects}>View Projects</button>
    </section>
  );
}

export default Hero;