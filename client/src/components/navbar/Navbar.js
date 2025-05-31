import React from 'react'
import { useRef } from "react";
import "./Navbar.css"
// import { useState } from 'react';
import logo from './assets/logo.png'
import { FaBars, FaTimes } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
//   const [showmediaicon, setshowmediaicon] = useState(false);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className='head'>
      <div className='logo2'>
          <img src={logo} className='logoimg2' alt='logo'></img>
      </div>
      <nav className='mainNav' ref={navRef}>
        <div className='logo'>
          <img src={logo} className='logoimg' alt='logo'></img>
        </div>
        <div className="menu">
          <ul >
            <li>
              <a href="/sports">Home</a>
            </li>
            <li>
              <a href="/sports/explore">Sports</a>
            </li>
            <li>
              <a href="/sports/CourtStatus">CourtStatus</a>
            </li>
            <li>
              <a href="/sports/GC">GC</a>
            </li>
            <li>
              <a href="/sports/events-timeline">EventsTimeLine</a>
            </li>
            <li>
              <a href="/sports/turfbooking">TurfBooking</a>
            </li>
            <li>
              <a href="/sports/contact">Contact Us</a>
            </li>
          </ul>
          {/* hamburget menu start  */}
          {/* <div className="hamburger-menu">
            <a href='#' onClick={() => setshowmediaicon(!showmediaicon)}>
              <GiHamburgerMenu />
            </a>
          </div> */}
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar