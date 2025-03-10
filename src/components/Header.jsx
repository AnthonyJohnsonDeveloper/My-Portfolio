import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/" className="personal__logo">
        Anthony Johnson
      </Link>
      
      <ul className="nav__link--list">
        <li className="nav__link">
          <a href="#languages" className="nav__link--anchor link__hover-effect link__hover-effect--black">
            Languages
          </a>
        </li>
        <li className="nav__link">
          <a href="#projects" className="nav__link--anchor link__hover-effect link__hover-effect--black">
            Projects
          </a>
        </li>
        <li className="nav__link">
          <Link to="/contact" className="nav__link--anchor link__hover-effect link__hover-effect--black">
            Hire Me
          </Link>
        </li>
        <li className="nav__link">
        <a href="mailto:anthonyjohnson5016@gmail.com" className="nav__link--anchor link__hover-effect link__hover-effect--black">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;