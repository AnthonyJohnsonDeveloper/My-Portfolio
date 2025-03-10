import React from "react";

// Image imports
import tuneWizardImg from "../assets/img/Capture.PNG";
import portfolioImg from "../assets/img/Website.PNG";
import exampleImg from "../assets/img/loopit.png";

const projects = [
  {
    title: "TuneWizard",
    stack: "Html, Css, JavaScript",
    img: tuneWizardImg,
    description:
      "The application is a car tuning tool designed for both racing and drifting enthusiasts. Users can input specs like weight, HP, tire sizes, and it identifies appropriate car packs. Built with clean JS logic and form handling.",
    github: "https://github.com/AnthonyJohnsonDeveloper",
    demo: "https://anthonyjohnsondeveloper.github.io/First-Project/"
  },
  {
    title: "Portfolio Project",
    stack: "Html, Css",
    img: portfolioImg,
    description:
      "This is my portfolio site built from scratch using HTML and CSS with smooth animations on load.",
    github: "https://github.com/AnthonyJohnsonDeveloper",
    demo: "https://anthonyjohnsondeveloper.github.io/First-Project/"
  },
  {
    title: "Example Project",
    stack: "Html, Css, JavaScript",
    img: exampleImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illum explicabo tempore veritatis! Odio adipisci cumque.",
    github: "https://github.com/AnthonyJohnsonDeveloper",
    demo: "https://anthonyjohnsondeveloper.github.io/First-Project/"
  }
];

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">Here are some of my <span className="text--red">projects</span></h1>
          <ul className="project__list">
            {projects.map((project, i) => (
              <li className="project" key={i}>
                <div className="project__wrapper">
                  <img src={project.img} className="project__img" alt={project.title} />
                  <div className="project__description">
                    <h3 className="project__description--title">{project.title}</h3>
                    <h4 className="project__description--sub-title">{project.stack}</h4>
                    <p className="project__description--para">{project.description}</p>
                    <div className="project__description--links">
                      <a href={project.github} className="project__description--link" target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                      <a href={project.demo} className="project__description--link" target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;