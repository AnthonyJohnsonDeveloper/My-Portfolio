import React from "react";

import htmlIcon from "../assets/img/html.jpg";
import cssIcon from "../assets/img/css-131-722685.webp";
import jsIcon from "../assets/img/javascript-1-225993.webp";
import reactIcon from "../assets/img/react-3-1175109.webp";
import jqueryIcon from "../assets/img/free-postgresql-11-1175122.webp";
import nodeIcon from "../assets/img/node-js.svg";
import bootstrapIcon from "../assets/img/Bootstrap_logo.svg.png";
import postgresIcon from "../assets/img/kisspng-web-development-jquery-ui-javascript-computer-icon-jqlogo-5ae94a5d5e5172.2488375515252383653863.jpg";

const techs = [
  { name: "HTML", img: htmlIcon },
  { name: "CSS", img: cssIcon },
  { name: "JavaScript", img: jsIcon },
  { name: "React", img: reactIcon },
  { name: "jQuery", img: jqueryIcon },
  { name: "Node.js", img: nodeIcon },
  { name: "Bootstrap", img: bootstrapIcon },
  { name: "PostgreSQL", img: postgresIcon }
];

function TechStack() {
  return (
    <section id="languages">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            This is my <span className="text--red">Technology stack</span>
          </h1>
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