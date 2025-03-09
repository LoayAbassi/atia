import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "./logo.png";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <> 
      <div className='"navbar-placeholder'>

      </div>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
          <img src={logo} alt="logo" className="navbar-logo" />

          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>

            <li><Link to="/">L'ATIA</Link></li>
            <li><a href="/#part">Partenaires</a></li>
            <li><a href="/#bureau">Bureau Exécutif</a></li>
            <li><a href="/#events">Evénement</a></li>
            <li><Link to="/adh">Adhésion</Link></li>
            <li><a href="/#contact" className="contact">Contact</a></li>
          </ul>
        </nav>
    </>
    
  );
};

export default Navbar;
