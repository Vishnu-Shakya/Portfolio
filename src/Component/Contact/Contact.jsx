import React, { useRef } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';
import codeforce from '../../assets/codeforce.png';
import linkedIn from '../../assets/linkedIn.png';
import leetcode from '../../assets/leetcode.png';
import github from '../../assets/github.png';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form);

    emailjs.sendForm('service_swrcr5n', 'template_i3pwmcc', form.current, '50JUfQCImo3zRTKlR')
      .then((result) => {
        form.current.reset();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleClick = (url) => {
    console.log(url);
    window.location.href = url;
  };

  return (
    <section id="contactPage">
      <h1 className="contactPageTitle">Contact Me</h1>
      <form ref={form} className="contactForm" onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Enter Your Name" name="from_name" />
        <input type="email" className="email" name="from_email" placeholder="Enter Your Email" />
        <textarea name="message" className="msg" rows="5" placeholder="Add Your Message"></textarea>
        <button type="submit" className="submitBtn">Submit</button>
      </form>
      <div className="links">
        <img src={github} alt="GitHub" className="link" onClick={() => handleClick("https://github.com/Vishnu-Shakya")} />
        <img src={codeforce} alt="Codeforces" className="link" onClick={() => handleClick("https://codeforces.com/profile/vishnu_0463")} />
        <img src={linkedIn} alt="LinkedIn" className="link" onClick={() => handleClick("https://www.linkedin.com/in/vishnu-shakya-198293265/")} />
        <img src={leetcode} alt="LeetCode" className="link" onClick={() => handleClick("https://leetcode.com/u/vish_nu0463/")} />
      </div>
    </section>
  );
}

export default Contact;
