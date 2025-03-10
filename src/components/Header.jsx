import React from "react";
import "../styles/Header.css"; // We'll style it here

function Header() {
  return (
    <nav className="navbar">
      <div className="logo">Anthony Johnson</div>
      <ul className="nav-links">
        <li><a href="#languages">Languages</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="mailto:anthonyjohnson5016@gmail.com" className="contact-button">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;