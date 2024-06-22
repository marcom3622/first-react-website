import React, { useEffect, useState } from "react";
import "./ProjectsCard.css";

interface ProjectsCardData {
  image: string;
  title: string;
  description: string;
  skills: string[];
}

function ProjectsCard(props: ProjectsCardData) {
  const [screenSize, setScreenSize] = useState(getImageSize(window.innerWidth));

  function getImageSize(width: number): number {
    if (width < 1440 && width > 768) return (width / 1440) * 150;
    return 150;
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getImageSize(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className='project-card-container'>
        <div className='image-container'>
          <img
            className='props-image'
            src={props.image}
            alt={props.title}
            width={screenSize}
          />
        </div>
        <div className='project-container'>
          <h4 className='project-title'>{props.title}</h4>
          <div className='image-container-mobile'>
            <img
              className='props-image'
              src={props.image}
              alt={props.title}
              width={screenSize}
            />
          </div>
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
