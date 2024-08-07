import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ title, description, technologies, image, githubUrl }) {
  const handleClick = () => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
      <div className="github-link">View on GitHub</div>
    </div>
  );
}


export default ProjectCard;