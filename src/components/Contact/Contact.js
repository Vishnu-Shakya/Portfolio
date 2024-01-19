import React,{useRef} from 'react'
import "./contact.css"
import istagram from  "../../assets/assets/instagram.png";
import emailjs from '@emailjs/browser';

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





  return (
    <section id="contactPage">
     <h1 className="contactPageTitle">Contact Me </h1>
      <span className="contactPageDesc"> quisquam dolores incidnulla soluta delectus ipsum voluptatibus ut.</span>
      <form ref={form} className="contactForm" onSubmit={sendEmail}>
        <input type="text" className="name" placeholder='Enter Your Name' name='from_name'/>
        <input type="email" className='email' name="from_name"  placeholder='Enter Your Email '  />
        <textarea name="message" className='msg' rows="5" placeholder='Add Your Message'></textarea>
        <button type="submit" className='submitBtn'>Submit</button>
       
      </form>
      <div className="links">
          <img src={istagram} alt="" className="link" />
          <img src={istagram} alt="" className="link" />
          <img src={istagram} alt="" className="link" />
          <img src={istagram} alt="" className="link" />

        </div>

    </section>
  )
}

export default Contact