// Navbar.js

import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="Link" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li className="desktopMenuListItem">
            <Link to="/about" className="Link" onClick={toggleMobileMenu}>
              About
            </Link>
          </li>
          <li className="desktopMenuListItem">
            <Link to="/education" className="Link" onClick={toggleMobileMenu}>
              Education
            </Link>
          </li>
          <li className="desktopMenuListItem">
            <Link to="/project" className="Link" onClick={toggleMobileMenu}>
              Projects
            </Link>
          </li>
          <li className="desktopMenuListItem">
            <Link to="/skills" className="Link" onClick={toggleMobileMenu}>
              Skills
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/contact" className="desktopMenuBtn" onClick={toggleMobileMenu}>
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </Link>
    </nav>
  );
};

export default Navbar;
