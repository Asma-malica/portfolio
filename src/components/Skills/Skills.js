// Skills.js

import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="main-heading">SKILLS</h1>
      <div className="skill-category">
        <h2 className="category-title">Programming Languages</h2>
        <ul className="skills-list">
          <li>C (Expert)</li>
          <li>C++ (Intermediate)</li>
          <li>Python (Intermediate)</li>
          <li>Java (Expert)</li>
        </ul>
      </div>

      <div className="skill-category">
        <h2 className="category-title">Data Science</h2>
        <ul className="skills-list">
          <li>Numpy</li>
          <li>Pandas</li>
          <li>Seaborn</li>
        </ul>
      </div>

      <div className="skill-category">
        <h2 className="category-title">Web Development</h2>
        <ul className="skills-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React JS</li>
        </ul>
      </div>

      <div className="skill-category">
        <h2 className="category-title">UI/UX Design</h2>
        <ul className="skills-list">
          <li>UI/UX Design Principles</li>
          <li>Figma</li>
          <li>Adobe Illustrator</li>
        </ul>
      </div>

      <div className="skill-category">
        <h2 className="category-title">Tools and Databases</h2>
        <ul className="skills-list">
          <li>Git & GitHub</li>
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
