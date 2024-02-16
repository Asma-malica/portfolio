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
                <ul className="desktopMenuList">
                    <li className="desktopMenuListItem">
                        <Link to="/" className="Link">
                            Home
                        </Link>
                    </li>
                    <li className="desktopMenuListItem">
                        <Link to="/about" className="Link">
                            About
                        </Link>
                    </li>
                    <li className="desktopMenuListItem">
                        <Link to="/education" className="Link">
                            Education
                        </Link>
                    </li>
                    <li className="desktopMenuListItem">
                        <Link to="/project" className="Link">
                            Projects
                        </Link>
                    </li>
                    <li className="desktopMenuListItem">
                        <Link to="/skills" className="Link">
                            Skills
                        </Link>
                    </li>
                </ul>
            </div>
            <Link to="/contact" className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuImg" />
                Contact Me
            </Link>
        </nav>
    );
};

export default Navbar;
