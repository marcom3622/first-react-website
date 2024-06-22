import React from "react";
import "./ProjectsCard.css";

interface ProjectsCardData {
  image: string;
  title: string;
  description: string;
  skills: string[];
}

function ProjectsCard(props: ProjectsCardData) {
  return (
    <>
      <div className='project-card-container'>
        <div className='image-container'>
          <img
            className='props-image'
            src={props.image}
            alt={props.title}
            width={150}
          />
        </div>
        <div className='project-container'>
          <h4 className='project-title'>{props.title}</h4>
          <p className='project-description'>{props.description}</p>
          {props.skills.map((skill) => (
            <p className='project-skills'>{skill}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsCard;
