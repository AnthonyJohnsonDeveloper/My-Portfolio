import React from "react";

const techs = [
  { name: "HTML", img: "/assets/img/html.jpg" },
  { name: "CSS", img: "/assets/img/css-131-722685.webp" },
  { name: "JavaScript", img: "/assets/img/javascript-1-225993.webp" },
  { name: "React", img: "/assets/img/react-3-1175109.webp" },
  { name: "jQuery", img: "/assets/img/kisspng-web-development-jquery-ui-javascript-computer-icon-jqlogo.jpg" },
  { name: "Node.js", img: "/assets/img/node-js.svg" },
  { name: "Bootstrap", img: "/assets/img/Bootstrap_logo.svg.png" },
  { name: "PostgreSQL", img: "/assets/img/free-postgresql-11-1175122.webp" }
];

function TechStack() {
  return (
    <section id="languages">
      <div className="container">
        <div className="row">
          <h1 className="section__title">This is my <span className="text--red">Technology stack</span></h1>
          <div className="language__list">
            {techs.map((tech, index) => (
              <div className="language" key={index}>
                <figure className="language__img--wrapper">
                  <img src={tech.img} alt={tech.name} className="language__img" />
                </figure>
                <span className="language__name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;