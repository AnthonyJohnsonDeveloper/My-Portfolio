import React from "react";

function Footer() {
  return (
    <footer>
      <div className="row footer__row">
        <a href="#" className="footer__anchor">
          <figure className="footer__logo--img">
            <img src="/assets/img/1.png" alt="logo" className="footer__logo--img" />
          </figure>
          <span className="footer__logo--popup">Top ↑</span>
        </a>
        <div className="footer__social--list">
          <a href="https://github.com/AnthonyJohnsonDeveloper" target="_blank" className="footer__social--link">GitHub</a>
          <a href="https://www.linkedin.com/in/anthony-johnson-81ba01257/" target="_blank" className="footer__social--link">LinkedIn</a>
          <a href="mailto:anthonyjohnson5016@gmail.com" target="_blank" className="footer__social--link">Email</a>
          <a href="/assets/resume.pdf" target="_blank" className="footer__social--link">Resume</a>
        </div>
        <div className="footer__copyright">© 2024 Anthony Johnson</div>
      </div>
    </footer>
  );
}

export default Footer;