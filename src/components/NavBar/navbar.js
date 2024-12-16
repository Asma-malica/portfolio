import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className={`mobileMenuToggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`desktopMenu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="desktopMenuList">
          <li className="desktopMenuListItem">
            <a href="/" className="Link" onClick={toggleMobileMenu}>
              Home
            </a>
          </li>
          <li className="desktopMenuListItem">
            <a href="/about" className="Link" onClick={toggleMobileMenu}>
              About
            </a>
          </li>
          <li className="desktopMenuListItem">
            <a href="/education" className="Link" onClick={toggleMobileMenu}>
              Education
            </a>
          </li>
          <li className="desktopMenuListItem">
            <a href="/project" className="Link" onClick={toggleMobileMenu}>
              Projects
            </a>
          </li>
          <li className="desktopMenuListItem">
            <a href="/skills" className="Link" onClick={toggleMobileMenu}>
              Skills
            </a>
          </li>
          <li className="desktopMenuListItem">
            <a
              href="mailto:asmamalica07@gmail.com"
              className="Link contactLink"
              onClick={toggleMobileMenu}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
