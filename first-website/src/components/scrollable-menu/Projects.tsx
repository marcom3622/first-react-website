import React from "react";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard";

function Projects() {
  const titles = [
    "C Task Scheduler",
    "C Server",
    "C++ Machine Learning Framework",
    "Generative Food Collator",
    "Movies Catalogue Website",
  ];
  const images = [
    "/assets/pic1.png",
    "/assets/pic2.png",
    "/assets/pic3.png",
    "/assets/pic4.png",
    "/assets/pic5.png",
  ];
  const descriptions = [
    "Implemented a Multithreaded Process Management System in C. Developed a simulation environment for process management in Linux, utilising threads to simulate a variety of process operations including creation, scheduling, and termination. This system effectively demonstrated the intricacies of operating system process handling. Utilised the Linux operating system for threading and process management, leveraging bash scripting for automation and testing, and applying C for performance-critical process simulation.",
    "Developed a server in C, effectively handling local requests and communications to generate graphs and calculate shortest distances between vertices using Dijkstra's Shortest Path Algorithm.",
    "Created an open-source, high-performance machine learning framework implemented in C++. It provides a comprehensive set of tools and algorithms for building and training machine learning models. This framework is designed to be efficient, flexible, and easy to use, making it suitable for both research and production environments.",
    "Spearheaded a collaborative initiative with BJSS to design and launch an innovative food recipe generator application. Utilizing Dart, Flutter, and generative AI technologies, I guided the project from its initial concept through to successful completion, exemplifying robust leadership and proficient application of Agile methodologies.",
    "Designed and developed a dynamic movies website using HTML, CSS, and JavaScript for the frontend, complemented by PHP and SQL for the backend. Integrated robust database management systems to ensure efficient data retrieval and storage.",
  ];
  const skills = [
    ["C", "Linux", "Bash", "Multithreading"],
    ["C", "Linux", "Bash", "Graphs", "Algorithms"],
    ["C++", "Mathematics", "Optimisation", "AI", "Algorithms"],
    [
      "Leadership",
      "Teamwork",
      "Team Management",
      "Team Motivation",
      "Dart",
      "Flutter",
      "Artificial Intelligence (AI)",
      "Object Detection",
      "GPT-4",
      "API",
      "Agile Methodologies",
      "Scrum",
      "Gitlab",
      "Version Control",
      "Continuous Integration and Continuous Delivery (CI/CD)",
    ],
    [
      "SQL",
      "CSS",
      "HTML",
      "Javascript",
      "PHP",
      "Database Design",
      "Relational Databases",
    ],
  ];

  return (
    <>
      <div className='projects-container' id='projects'>
        <h2 className='projects-heading'>Projects</h2>
        {titles.map((title, index) => (
          <ProjectsCard
            image={images[index]}
            description={descriptions[index]}
            title={title}
            skills={skills[index]}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
