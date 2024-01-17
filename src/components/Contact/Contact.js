import React from 'react'
import "./contact.css"
import istagram from  "../../assets/assets/instagram.png";

function Contact() {
  return (
    <section className="contactPage">
     <h1 className="contactPageTitle">Contact Me </h1>
      <span className="contactPageDesc"> quisquam dolores incidnulla soluta delectus ipsum voluptatibus ut.</span>
      <form action="submit" className="contactForm">
        <input type="text" className="name" placeholder='Enter Your Name'/>
        <input type="email" className='email' name="email"  placeholder='Enter Your Email '  />
        <textarea name="message" className='msg' rows="5" placeholder='Add Your Message'></textarea>
        <button type="submit" className='submitBtn'>Submit</button>
        <div className="links">
          <img src={istagram} alt="" className="link" />
          <img src={istagram} alt="" className="link" />
          <img src={istagram} alt="" className="link" />
          <img src={istagram} alt="" className="link" />

        </div>

      </form>
    </section>
  )
}

export default Contact