import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "./logo.png";

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
            <li><a href="#home">L'ATIA</a></li>
            <li><a href="#about">Partenaires</a></li>
            <li><a href="#services">Bureau Exécutif</a></li>
            <li><a href="#contact">Evénement</a></li>
            <li><a href="#contact">Adhésion</a></li>
            <li><a href="#contact" className="contact">Contact</a></li>
          </ul>
        </nav>
    </>
    
  );
};

export default Navbar;
