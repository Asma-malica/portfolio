// Education.js

import React from 'react';
import './education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-item">
        <div className="education-year">2016-2018</div>
        <div className="education-details">
          <h3>SSLC Schoolings</h3>
          <p>Completed my schooling at Vellalar Matriculation Higher Secondary School, Thindal, Erode with a remarkable score of 93.8%.</p>
        </div>
      </div>
      <div className="education-item">
        <div className="education-year">2018-2020</div>
        <div className="education-details">
          <h3>Higher Secondary</h3>
          <p>Aced my Higher Secondary education at Vellalar Matriculation Higher Secondary School, Thindal, Erode with an impressive 95%.</p>
        </div>
      </div>
      <div className="education-item">
        <div className="education-year">2020-2024</div>
        <div className="education-details">
          <h3>Software Engineering</h3>
          <p>Pursuing a Bachelor's in Computer Science Engineering from Kongu Engineering College, Perundurai, currently maintaining a stellar CGPA of 8.9.</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
