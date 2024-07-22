import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const projectsData = [
  {
    title: "AI flashcard web app",
    description: "Flash card web app with AI generator",
    technologies: ["Reactjs", "Express", "API"],
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Data Cleansing",
    description: "Data cleansing project with Mysql",
    technologies: ["Mysql", "Data cleaning"],
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Stock Market Prediction",
    description: "Stock Market Prediction with ML",
    technologies: ["Python", "ML", "Algorithm"],
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