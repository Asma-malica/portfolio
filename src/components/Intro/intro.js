
import React, { useState, useEffect } from 'react';
import './intro.css';
import bg from '../../assets/asma.png';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
    const [showRoles, setShowRoles] = useState(0); // 0 for Software Developer, 1 for UI/UX Designer, 2 for ML Explorer

    useEffect(() => {
        const interval = setInterval(() => {
            setShowRoles((prev) => (prev + 1) % 3); // Toggle between 0, 1, and 2
        }, 1000); // Toggle every 10 seconds

        return () => clearInterval(interval);
    }, []);

    const getRoleText = () => {
        switch (showRoles) {
            case 0:
                return 'Web Developer';
            case 1:
                return 'UI/UX Designer';
            case 2:
                return 'ML Explorer';
            default:
                return 'Web Developer';
        }
    };

    return (
        <section id="intro">
            <div className="introContent">
                <span className='hello'>Hello,</span>
                <span className='introText'>
                    I'm <span className="introName">Asma Malica</span><br />
                    <span className={`marquee ${showRoles === 0 ? 'webDeveloper' : showRoles === 1 ? 'uxDesigner' : 'mlExplorer' }`}>
                        {getRoleText()}
                    </span>
                </span>
                <p className='introPara'>I am a skilled Web Developer, UI/UX Designer, and passionate ML Explorer</p>
                <a href="https://drive.google.com/file/d/1n7i-VFPhAQat5t0iZ4daOiejx4AEvPpQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <button className="btn">
                        <img src={btnImg} alt="Hire" className="btnImg" /> Resume
                    </button>
                </a>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;