import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const projectsData = [
  {
    title: "AI flashcard web app",
    description: "...",
    technologies: ["...", "...", "...", "..."],
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "...",
    description: "...",
    technologies: ["...", "...", "..."],
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "...",
    description: "...",
    technologies: ["...", "...", "..."],
    image: "https://via.placeholder.com/300x200"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;