import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const descriptions = [
    "Selected for prestigious tech programs after an extensive evaluation process. Participation in this initiative significantly provided unique opportunities with well-renowned companies in the tech industry, including G-research, Microsoft, Reply, etc. I am also part of their Tech 500 program.",
    "Selected for prestigious programs after an extensive evaluation process. Participation in this initiative significantly enhanced my skill set and employability, providing unique experiences that set me apart in the job market.",
    "Spearheaded a collaborative initiative with BJSS to design and launch an innovative food recipe generator application. Utilizing Dart, Flutter, and generative AI technologies, I guided the project from its initial concept through to successful completion, exemplifying robust leadership and proficient application of Agile methodologies.",
    "Increased net-revenue by 200% in the second quarter of 2021 and a further 10% in the third quarter of 2021. \nCoordinated statistical data analysis, design and information flow. \nCreated various Excel documents to assist with pulling metrics data and presenting information to stakeholders for concise explanations of best placement for needed resources.\n Participated in requirements meetings and data mapping sessions to understand business needs and to recover missing and incomplete data in the company database then restructured it and transferred it to a modern and online system.\n Researched and resolved issues regarding integrity of data flow into databases.\n Recommended data standardisation and usage for protection of data integrity.",
    "Amazon Discover programme",
    "Spearheaded a team of data scientists and analysts during JMAN's Insight Day. Efficiently managed the team's workflow, ensuring timely delivery and maintaining the highest standards of accuracy. Synthesized and presented our findings to clients, providing them with actionable insights and clear understandings of the data.",
    "Competed in an intensive challenge at G Research, securing a place within the top 5 amongst a competitive cohort. Designed and implemented a custom predictive algorithm specifically tailored to the challenge's requirements, demonstrating advanced analytical skills and innovative problem-solving capabilities.",
    "Selected for their prestigious program and upon completion gained the opportunity to have my achievements recognised through UCAS, resulting in additional consideration from RO Partner universities.",
  ];

  const titles = [
    "Associate at Upreach",
    "Associate at Social Mobility Foundation",
    "Project Manager at BJSS",
    "Data Analyst at Horizon Transport",
    "Spring Intern at Amazon",
    "Project Manager at JMAN Group",
    "Insight day at G-Research",
    "Associate at Realising Opportunities",
  ];

  const dates = [
    "Sep 2022 - Present",
    "Oct 2019 - Present",
    "Oct 2023 - May 2024",
    "May 2021 - Apr 2024",
    "Jul 2023 - Jul 2023",
    "Jul 2023 - Jul 2023",
    "Jul 2023 - Jul 2023",
    "Sep 2019 - Jun 2021",
  ];

  const skills = [
    ["Team Management", "Organization Skills", "Leadership", "Public Speaking"],
    [
      "Team Management",
      "Networking",
      "Curriculum Development",
      "Communication",
    ],
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
      "Data Entry",
      "Team Management",
      "Database Administration",
      "Project Management",
      "Data Management",
      "Scheduling",
      "Data Analysis",
      "Data Visualization",
      "Problem Solving",
      "Negotiation",
      "Communication",
    ],
    [
      "Data Structures",
      "Python (Programming Language)",
      "Systems Design",
      "C++",
      "Java",
      "Algorithms",
      "Debugging",
    ],
    [
      "Project Management",
      "Data Science",
      "Data Analysis",
      "Presentation Skills",
      "Leadership",
      "Public Speaking",
      "Communication",
    ],
    [
      "Python (Programming Language)",
      "Teamwork",
      "Communication",
      "Algorithm Design",
    ],
    ["Team Management", "Networking", "Teamwork", "Communication"],
  ];

  return (
    <>
      <div className='experience-container' id='experience'>
        <h2 className='experience-heading'>Experience</h2>
        {titles.map((title, index) => (
          <ExperienceCard
            date={dates[index]}
            description={descriptions[index]}
            title={title}
            skills={skills[index]}
          />
        ))}
      </div>
    </>
  );
}

export default Experience;
