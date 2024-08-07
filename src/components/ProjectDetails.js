import React from 'react';
import '../styles/ProjectDetails.css';

function ProjectDetails({ project }) {
  return (
    <section className="project-details">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <img src={project.image} alt={project.title} className="project-image" />
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </section>
  );
}

export default ProjectDetails;