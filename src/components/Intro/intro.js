// Intro.js

import React, { useState, useEffect } from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    const [showSoftwareDeveloper, setShowSoftwareDeveloper] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowSoftwareDeveloper((prev) => !prev);
        }, 1000); // Toggle every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="intro">
            <div className="introContent">
                <span className='hello'>Hello,</span>
                <span className='introText'>
                    I'm <span className="introName">Asma Malica</span><br />
                    <span className={`marquee${showSoftwareDeveloper ? 'softwareDeveloper' : 'uxDesigner'}`}>
                        {showSoftwareDeveloper ? 'Software Developer' : 'UI/UX Designer'}
                    </span>
                </span>
                <p className='introPara'>I am a skilled Software Developer and passionate engineer in designing </p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" />Hire me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
