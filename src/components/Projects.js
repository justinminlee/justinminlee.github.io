import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const projectsData = [
  {
    title: "AI flashcard web app",
    description: "Develpoed flash card web app with AI generator",
    technologies: ["Reactjs", "Express", "API"],
    image: "https://via.placeholder.com/300x200",
    githubUrl: "https://github.com/justinminlee/flashcards"
  },
  {
    title: "Data Cleansing",
    description: "Data cleansing project with Mysql",
    technologies: ["Mysql", "Data Cleaning"],
    image: "/mysql.png",
    githubUrl: "https://github.com/justinminlee/mysql_project"
  },
  {
    title: "Stock Market Prediction",
    description: "Stock Market Prediction with Random Forest Algorithm",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    image: "/market_prediction.png",
    githubUrl: "https://github.com/justinminlee/stockmarket_prediction_project"
  },
  {
    title: "Data analysis/visualisation with Occupation data(On going prototype)",
    description: "Data analysis with Occupation data on Tableau",
    technologies: ["Mysql", "Tableau", "Data Analysis", "Data Visualisation", "Data Cleaning"],
    image: "/tableau.png",
    githubUrl: ""
  },
  {
    title: "Automated Machine Learning Web Application",
    description: "Python Streamlit automated machine learning web application",
    technologies: ["Python", "Streamlit", "Machine Learning"],
    image: "/Auto_ML.png",
    githubUrl: "https://github.com/justinminlee/ML_webapp"
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