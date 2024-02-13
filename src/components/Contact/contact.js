// contact.js

import React from "react";
import './contact.css'; 
import LinkedInIcon from '../../assets/linkedin.png';
import GithubIcon from '../../assets/github.png';
import TwitterIcon from '../../assets/twitter.png';

const Contact = () => {
  return (
    <section className="contactPage">
      <div id="contact"></div>
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Get in touch !!!</span>
      <form className="contactForm">
        <input type="text" className="name" placeholder="Your Name" />
        <input type="email" className="email" placeholder="Your Email" />
        <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
        <button type="submit" value='send' className="submitBtn">Submit</button>
        <div className="links">
          <img src={LinkedInIcon} alt="LinkedIn" className="link" />
          <img src={GithubIcon} alt="Github" className="link" />
          <img src={TwitterIcon} alt="Twitter" className="link" />
        </div>
      </form>
    </section>
  );
};

export default Contact;














// import React from "react";
// import LinkedInIcon from '../../assets/linkedin.png';
// import GithubIcon from '../../assets/github.png';
// import TwitterIcon from '../../assets/twitter.png';



// const Contact = () =>{
//     return(
//         <section className="contactPage">
          
//             <div id="contact"></div>
//            <h1 className="contactPageTitle">Contact Me</h1>
//            <span className="contactDesc">Get in touch !!!</span>
//            <form className="contactForm">
//             <input type = "text" className="name" placeholder="Your Name" />
//             <input type = "email" className="email" placeholder="Your Email" />
//             <textarea className = "msg" name = "message"  rows="5" placeholder="Your Message"></textarea>
//             <button type = "submit" value='send' className="submitBtn">Submit</button>
//             <div className="links">
//                 <img src = {LinkedInIcon} alt="Facebook " className="link" />
//                 <img src = {GithubIcon} alt="Github" className="link" />
//                 <img src = {TwitterIcon} alt="Twitter" className="link" />
//             </div>

//            </form>
    
//         </section>
//     ); 
// }
// export default Contact;