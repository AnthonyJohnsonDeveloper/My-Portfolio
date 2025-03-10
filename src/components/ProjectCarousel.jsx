import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProjectCarousel.css";

// You can import images or use direct paths if stored locally
import project1 from "../assets/img/Capture.png";
import project2 from "../assets/img/Website.png";
import project3 from "../assets/img/loopit.png";

const projects = [
  {
    title: "TuneWizard",
    description:
      "A desktop drifting/racing app that helps users generate car tuning setups based on input specs.",
    image: project1,
    github: "https://github.com/AnthonyJohnsonDeveloper",
    demo: "https://anthonyjohnsondeveloper.github.io/First-Project/",
  },
  {
    title: "Portfolio Website",
    description:
      "This is my personal portfolio built with HTML, CSS, and subtle animation effects.",
    image: project2,
    github: "https://github.com/AnthonyJohnsonDeveloper",
    demo: "https://anthonyjohnsondeveloper.github.io/First-Project/",
  },
  {
    title: "Example Project",
    description:
      "A placeholder project to showcase carousel interaction and layout logic.",
    image: project3,
    github: "https://github.com/AnthonyJohnsonDeveloper",
    demo: "https://anthonyjohnsondeveloper.github.io/First-Project/",
  },
];

function ProjectCarousel() {
  return (
    <section className="project-carousel-container">
      <h2 className="project-carousel-title">Featured Projects</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        className="swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <img src={project.image} alt={`${project.title} preview`} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProjectCarousel;