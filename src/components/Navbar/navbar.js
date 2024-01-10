
import React from 'react'
import "./navbar.css";
import logo from "../../assets/logo.png"
import contactImg from "../../assets/contact.png"
import {Button, Link} from "react-scroll";
const Navbar = () => {
  return (
       <nav className="navbar">
        <img src={logo} alt="hii" className='logo' />
        <div className="desktopMenu">
        <Link className="desktopMenuListItems">Home</Link>
        <Link className="desktopMenuListItems">About</Link>
        <Link className="desktopMenuListItems">Portfolio</Link>
        <Link className="desktopMenuListItems">Clients</Link>

        </div>
        <Button className="desktopMenuBtn">
          <img src={contactImg} alt="reload" className="desktopMenuImg" />Contact me 
        </Button>
        

       </nav>
  )
}

export default Navbar