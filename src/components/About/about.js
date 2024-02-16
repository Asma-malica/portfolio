import React from 'react';
import './about.css';
// import bg from '../../assets/asma.png';

const About = () => {
    return (
        <div className="about-container">
            {/* <div className="image-container"> */}
                {/* <img src={bg} alt="Profile" className="bg" /> */}
            {/* </div> */}
            <div className="content-container">
                <h1>ABOUT ME</h1>
                <h1>Asma Malica J</h1>
                <p>Software Developer | UI/UX Designer | ML Explorer</p>
                <p>
                    I am a tech enthusiast and UI/UX Designer, merging creativity with web development for seamless user experiences. My exploration into Machine Learning enhances my ability to personalize designs, predict user behavior, and employ innovative solutions. Passionate about staying at the forefront of design trends, I integrate ML to create visually appealing and intuitive interfaces.
                </p>
            </div>
        </div>
    );
};

export default About;