import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ title, description, technologies, image }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;