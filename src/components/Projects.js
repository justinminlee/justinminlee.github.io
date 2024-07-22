import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const projectsData = [
  {
    title: "Sales Prediction Model",
    description: "Developed a machine learning model to predict future sales based on historical data and external factors.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Customer Segmentation Analysis",
    description: "Performed cluster analysis to segment customers based on their purchasing behavior and demographics.",
    technologies: ["R", "K-means clustering", "ggplot2"],
    image: "https://via.placeholder.com/300x200"
  },
  {
    title: "Interactive Dashboard",
    description: "Created an interactive dashboard to visualize key performance indicators for a retail company.",
    technologies: ["Tableau", "SQL", "Excel"],
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