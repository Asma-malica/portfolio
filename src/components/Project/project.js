import React from 'react';
import './project.css';

const projects = [
  {
    title: 'Todo List',
    description: 'I crafted a feature-rich TodoList app using React, emphasizing a responsive design to ensure optimal user experience across various devices. The application showcases dynamic task management',
    githubLink: 'https://github.com/Asma-malica/TodoList',
  },
 
  {
    title: 'Spam Alert System',
    description: 'Designed a Machine Learning-powered Spam Alert System during the Kavach Hackathon, featuring a user-friendly interface create with Streamlit for seamless interaction',
    githubLink: 'https://github.com/Asma-malica/Spam-Classifier',
  },
  {
    title: 'E-Commerce Website',
    description: 'Responsive e-commerce website with curated collections, user-friendly navigation, and a sleek design for an optimal shopping experience',
    githubLink: 'https://github.com/Asma-malica/E-CommerceWebsite',
  },

  {
    title: 'Bankers Algorithm',
    description: 'Implemented in Python, HTML, and CSS. A simulation of the Banker\'s algorithm for resource allocation in an operating system.',
    githubLink: 'https://github.com/Asma-malica/Bankers-Algorithm',
  },
 
  {
    title: 'Random Password Generator',
    description: 'Developed using Python and Java FX. This project generates random passwords for enhanced security.',
    githubLink: 'https://github.com/Asma-malica/Password-Generator-using-JavaFX',
  },
  {
    title: 'Guess the Number',
    description: 'This is a simple web-based number guessing game where users attempt to guess a randomly generated number.',
    githubLink: 'https://github.com/Asma-malica/GuessTheNumber',
  },

 
  {
    title: 'Restaurant Menu Page',
    description: 'Designed using Figma. This project involves creating an intuitive user interface for a restaurant menu page.',
    githubLink: 'https://github.com/Asma-malica/CodSoft/blob/main/Restaurant_Menu%20(2).png',
  },

 
];

const Project = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="h2">PROJECTS</h2><br></br>
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
