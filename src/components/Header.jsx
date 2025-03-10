import React from "react";

function Header() {
  return (
    <nav>
      <div className="personal__logo">Anthony Johnson</div>
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
          <a href="mailto:anthonyjohnson5016@gmail.com" className="nav__link--anchor nav__link--anchor-primary">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;