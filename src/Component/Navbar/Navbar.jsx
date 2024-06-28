
import React from 'react'
import "./navbar.css";
import logo from "../../assets/logo.png"
import contactImg from "../../assets/contact.png"
import { Button, Link } from "react-scroll";
import mobileMenu from "../../assets/menu.png";
import { useState } from 'react';
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">



      <img src={logo} alt="0" className='logo' />
      <div className="desktopMenu">
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItems">Home</Link>
        <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItems">About</Link>
        <Link activeClass='active' to="works" spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItems">Portfolio</Link>
      </div>
      <Button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', offset: { top: -150 } })
      }}>
        <img src={contactImg} alt="reload" className="desktopMenuImg" />Contact me
      </Button>

      {/* for mobile menu  */}

      <img src={mobileMenu} alt="0" className='moMenuLogo' onClick={() => {
        setShow(!show);
      }} />
      <div className="moMenu">


        {
          show ? (
            <Link activeClass='moActive' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="moDesktopMenuListItems">Home</Link>
          ) : ("")
        }
        {
          show ? (
            <Link activeClass='moActive' to="skills" spy={true} smooth={true} offset={-30} duration={500} className="moDesktopMenuListItems">About</Link>
          ) : ("")
        }
        {
          show ? (
            <Link activeClass='moActive' to="works" spy={true} smooth={true} offset={-70} duration={500} className="moDesktopMenuListItems">Portfolio</Link>
          ) : ("")
        }

        {
          show ? <Button className="desktopMenuBtn" onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
          }}>
            <img src={contactImg} alt="reload" className="desktopMenuImg" />Contact me
          </Button> : ("")
        }



      </div>

    </nav>
  )
}

export default Navbar