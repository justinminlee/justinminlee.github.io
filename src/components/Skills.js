import React from 'react';
import '../styles/Skills.css';

const skillsData = [
  { category: "Programming Languages", skills: ["Python", "R", "SQL"] },
  { category: "Data Analysis", skills: ["Pandas", "NumPy", "SciPy"] },
  { category: "Machine Learning", skills: ["Scikit-learn", "TensorFlow", "Keras"] },
  { category: "Data Visualization", skills: ["Matplotlib", "Seaborn", "Tableau", "Power BI"] },
  { category: "Big Data", skills: ["Spark", "Hadoop"] },
  { category: "Version Control", skills: ["Git", "GitHub"] }
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3>{skillCategory.category}</h3>
            <ul>
              {skillCategory.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;