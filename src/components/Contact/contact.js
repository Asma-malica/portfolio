// Contact.js

import React, { useState } from "react";
import './contact.css'; 
import LinkedInIcon from '../../assets/linkedin.png';
import GithubIcon from '../../assets/github.png';
import TwitterIcon from '../../assets/twitter.png';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    your_name: '',
    your_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailTemplateParams = {
      your_name: formData.your_name,
      your_email: formData.your_email, // Use the user's email from the form
      message: formData.message,
    };
  
    emailjs
      .send(
        'service_583ii9c',
        'template_s8c8eoj',
        emailTemplateParams,
        '7u7x6KmkbzUYjv6nf'
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          alert('Email Sent!');
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Failed to send email. Please try again.');
        }
      );
  };
  
  return (
    <section className="contactPage">
      <div id="contact"></div>
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Get in touch !!!</span>
      <form className="contactForm" onSubmit={handleSubmit}>
        <input type="text" className="name" placeholder="Your Name" name="your_name" value={formData.your_name} onChange={handleChange} required />
        <input type="email" className="email" placeholder="Your Email" name="your_email" value={formData.your_email} onChange={handleChange} required />
        <textarea className="msg" name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit" className="submitBtn">Submit</button>
        <div className="links">
          <a href="https://www.linkedin.com/in/Asma-malica/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" className="link" />
          </a>
          <a href="https://github.com/Asma-malica" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="Github" className="link" />
          </a>
          <a href="https://twitter.com/asma_malica" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
