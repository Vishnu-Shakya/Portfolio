import React from 'react';
import './intro.css';
import {Link} from "react-scroll"
import btnImg from "../../assets/hireme.png"
import bg from "../../assets/image.png"
function Intro() {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,<br/></span>
                <span className="introText">I'm <span className="introName">Vishnu</span> <br/> Website Developer</span>
                <p className="introPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem alias iusto odio, unde deleniti!</p>
            </div>
            <img src={bg} alt="" className="bg" />
            <Link><button className="btn"><img src={btnImg} alt="" />Hire me</button></Link>

        </section>
    )
}

export default Intro