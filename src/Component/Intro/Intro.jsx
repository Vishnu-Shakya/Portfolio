import React from 'react';
import './intro.css';
// import bg from "../../assets/image.png"

function Intro() {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,<br/></span>
                <span className="introText">I'm <span className="introName">Vishnu</span> <br/> Website Developer</span>
                <p className="introPara">I am a third-year Computer Science student at IIT Guwahati, passionate about web development and creating impactful digital experiences</p>
                {/* <Link><button className="btn"><img src={btnImg} alt="" className='btnImg'/>Hire Me</button></Link> */}
            
            </div>
            {/* <img src={bg} alt="" className="bg" /> */}

        </section>
    )
}

export default Intro