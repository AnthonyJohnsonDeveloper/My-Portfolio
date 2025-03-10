import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <div className="project-card__image" style={{ backgroundImage: `url(${image})` }}>
        <div className="project-card__overlay">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;