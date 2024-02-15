// Navbar.js

import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link to="/" className="desktopMenuListItem">
                    Home
                </Link>
                <Link to="/about" className="desktopMenuListItem">
                    About
                </Link>
                <Link to="/education" className="desktopMenuListItem">
                    Education
                </Link>
                <Link to="/project" className="desktopMenuListItem">
                    Projects
                </Link>
                <Link to="/skills" className="desktopMenuListItem">
                    Skills
                </Link>
            </div>
            <Link to="/contact" className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuImg" />
                Contact Me
            </Link>
        </nav>
    );
};

export default Navbar;

