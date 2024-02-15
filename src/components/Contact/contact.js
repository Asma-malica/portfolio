// Contact.js

import React, { useRef } from "react";
import './contact.css'; 
import LinkedInIcon from '../../assets/linkedin.png';
import GithubIcon from '../../assets/github.png';
import TwitterIcon from '../../assets/twitter.png';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      your_name: form.current.your_name.value,
      your_email: form.current.your_email.value,
      message: form.current.message.value,
    };

    emailjs.send('service_583ii9c', 'template_qjf06xp', templateParams, 'cYYE•••••••••••••••••')
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
        alert('Email Sent !! ')
        e.target.reset();
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
      });
  };

  return (
    <section className="contactPage">
      <div id="contact"></div>
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Get in touch !!!</span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="your_name" />
        <input type="email" className="email" placeholder="Your Email" name="your_email" />
        <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
        <button type="submit" value='send' className="submitBtn">Submit</button>
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
