// Footer.js

import React from "react";
import "./footer.css";

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
          <p className="additional-info">Connect with me:</p>
          {/* Add your social media links or icons here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
