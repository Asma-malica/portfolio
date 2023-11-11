// Project.js

import React from 'react';
import './project.css';

const projects = [
  {
    title: 'Random Password Generator',
    description: 'Developed using Python and Java FX. This project generates random passwords for enhanced security.',
    githubLink: 'https://github.com/your-username/random-password-generator',
  },
  {
    title: 'Bankers Algorithm',
    description: 'Implemented in Python, HTML, and CSS. A simulation of the Banker\'s algorithm for resource allocation in an operating system.',
    githubLink: 'https://github.com/your-username/bankers-algorithm',
  },
  {
    title: 'Restaurant Menu Page',
    description: 'Designed using Figma. This project involves creating an intuitive user interface for a restaurant menu page.',
    githubLink: 'https://github.com/your-username/restaurant-menu-page',
  },
];

const Project = () => {
  return (
    <section className="projects-section">
      <h2 className="h2">My Projects</h2><br></br>
      <p>I have done these projects and gained some knowledge.</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-outline">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Learn More (GitHub)</a>
            </div>
          </div>
        ))}
      </div>
      <div className="more-projects">
        <p>More projects coming soon...</p>
        {/* <span>&rarr;</span> */}
      </div>
    </section>
  );
}

export default Project;
