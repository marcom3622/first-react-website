import React from "react";
import "./ExperienceCard.css";

interface ExperienceCardData {
  date: string;
  title: string;
  description: string;
  skills: string[];
}

function ExperienceCard(props: ExperienceCardData) {
  return (
    <>
      <div className='experience-card-container'>
        <div className='date-container'>
          <p className='props-date'>{props.date}</p>
        </div>
        <div className='description-container'>
          <h4 className='props-title'>{props.title}</h4>
          <div className='date-container-mobile'>
            <p className='props-date'>{props.date}</p>
          </div>
          <p className='props-description'>{props.description}</p>
          {props.skills.map((skill) => (
            <p className='props-skills'>{skill}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default ExperienceCard;
