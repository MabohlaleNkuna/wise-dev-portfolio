import React from "react";
import './styles/Experience.css';

const skillsFrontend = [
  { skill: "HTML", level: "Experienced" },
  { skill: "CSS", level: "Experienced" },
  { skill: "JavaScript", level: "Experienced" },
  { skill: "Tailwind", level: "Experienced" },
  { skill: "React", level: "Experienced" },
  { skill: "React Native", level: "Experienced" },
];

const skillsBackend = [
  { skill: "Node.js", level: "Experienced" },
  { skill: "Express", level: "Experienced" },
  { skill: "MongoDB", level: "Experienced" },
  { skill: "SQLite", level: "Experienced" },
  { skill: "Firebase", level: "Experienced" },
];

const ExperienceSection = ({ title, skills }) => (
  <div className="experience-card">
    <h3>{title}</h3>
    <div className="content">
      {skills.map(({ skill, level }) => (
        <article className="details" key={skill}>
          <div>
            <h4>{skill}</h4>
            <small>{level}</small>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience">
      <h2 style={{ color: "#800000", fontSize: "2.5rem", marginBottom: "2rem" }}>My Skills</h2>
      <div className="experience-container">
        <ExperienceSection title="Frontend Development" skills={skillsFrontend} />
        <ExperienceSection title="Backend Development" skills={skillsBackend} />
      </div>
    </section>
  );
};

export default Experience;
