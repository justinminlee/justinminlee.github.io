import React from 'react';
import '../styles/Hero.css';

function Hero() {
  
  const navigateToProjects = () => {
    window.location.hash = 'projects';
  };

  return (
    <section className="hero">
      <h1>Justin Lee</h1>
      <h2>Data Science Graduate from QUT</h2>
      <p>Eager to contribute data science skills to an organisations
        <br />
        and build impactful solutions.
      </p>
      <button className="cta-button" onClick={navigateToProjects}>View Projects</button>
    </section>
  );
}

export default Hero;