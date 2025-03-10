import React from 'react';
import ProjectCarousel from '../components/ProjectCarousel';

const Projects = () => {
  return (
    <section id="projects" className="fade-in">
      <h1 className="section__title">Here are some of my <span className="text--red">projects</span></h1>
      <ProjectCarousel />
    </section>
  );
};

export default Projects;