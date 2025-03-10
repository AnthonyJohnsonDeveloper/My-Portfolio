import React from "react";

function Hero() {
  return (
    <section id="about-me">
      <div className="flex flex-1">
        <div className="about-me__info row">
          <div className="about-me__info--container">
            <figure className="about-me__picture--mask">
              <img src="/assets/img/profile.png" className="about-me__picture" alt="picture of me!" />
            </figure>
            <h1 className="about-me__info--title">
              Hey! I'm <span className="text--red">Anthony Johnson</span> <span className="rocket">🚀</span>
            </h1>
            <p className="about-me__info--para">
              I'm a <strong className="text--red">Frontend Software Engineer</strong> passionate about tech! Expert in crafting responsive, lightning-fast web apps. Let's build something amazing together! 💻 #TechEnthusiast #WebDevelopment
            </p>
            <div className="about-me__link">
              <a href="https://github.com/AnthonyJohnsonDeveloper" target="_blank" rel="noreferrer" className="about-me__link">
                Github
              </a>
              <a href="https://www.linkedin.com/in/anthony-johnson-81ba01257/" target="_blank" rel="noreferrer" className="about-me__link">
                LinkedIn
              </a>
              <a href="https://anthonyjohnsondeveloper.github.io/Resume/" target="_blank" rel="noreferrer" className="about-me__link">
                Resume
              </a>
            </div>
          </div>
          <figure className="about-me__img--container">
            <img src="/assets/img/undraw_Web_developer_re_h7ie.png" className="about-me__img" alt="developer" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;