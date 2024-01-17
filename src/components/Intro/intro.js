import React from 'react';
import './intro.css';
import {Link} from "react-scroll"
import btnImg from "../../assets/hireme.png"
// import bg from "../../assets/image.png"

function Intro() {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,<br/></span>
                <span className="introText">I'm <span className="introName">Vishnu</span> <br/> Website Developer</span>
                <p className="introPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem alias iusto odio, unde deleniti!</p>
                <Link><button className="btn"><img src={btnImg} alt="" className='btnImg'/>Hire Me</button></Link>
            
            </div>
            {/* <img src={bg} alt="" className="bg" /> */}

        </section>
    )
}

export default Intro