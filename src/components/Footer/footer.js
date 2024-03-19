// Footer.js

import React from "react";
import "./footer.css";
import LinkedInIcon from '../../assets/linkedin.png';
import GitHubIcon from '../../assets/github.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="left-content">
                    <p className="rights">© 2024 All Rights Reserved</p>
                </div>
                <div className="center-content">
                    <p className="quote">
                        "Your potential is endless. Don't limit yourself based on past
                        experiences."
                    </p>
                </div>
                <div className="right-content">
                   
                    <a href="https://www.linkedin.com/in/Asma-malica/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
                    </a>
                    <a href="https://github.com/Asma-malica" target="_blank" rel="noopener noreferrer">
                        <img src={GitHubIcon} alt="GitHub" className="social-icon" />
                    </a>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
