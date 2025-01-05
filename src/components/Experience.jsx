import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
  },
  card: {
    background: "var(--color-bg-variant)",
    padding: "2.4rem 5rem",
    borderRadius: "2rem",
    border: "1px solid transparent",
    transition: "var(--transition)",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
    color: "var(--color-primary)",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    rowGap: "2rem",
  },
  details: {
    display: "flex",
    gap: "1rem",
  },
  icon: {
    marginTop: "6px",
    color: "var(--color-primary)",
  },
  timeline: {
    marginTop: "2rem",
    padding: "1.5rem",
    background: "var(--color-bg-variant)",
    borderRadius: "1rem",
    lineHeight: "1.6",
    fontSize: "1rem",
    color: "var(--color-text-light)",
  },
};

const skillsFrontend = [
  { skill: "HTML", level: "Experienced" },
  { skill: "CSS", level: "Experienced" },
  { skill: "JavaScript", level: "Experienced" },
  { skill: "Tailwind", level: "Experienced" },
  { skill: "Bootstrap", level: "Experienced" },
  { skill: "React", level: "Experienced" },
  { skill: "React Native", level: "Experienced" },
  { skill: "Firebase", level: "Experienced" },
];

const skillsBackend = [
  { skill: "Node.js", level: "Experienced" },
  { skill: "Express", level: "Experienced" },
  { skill: "MongoDB", level: "Experienced" },
  { skill: "SQLite", level: "Experienced" },
];

const ExperienceSection = ({ title, skills }) => (
  <div style={styles.card}>
    <h3 style={styles.header}>{title}</h3>
    <div style={styles.content}>
      {skills.map(({ skill, level }) => (
        <article style={styles.details} key={skill}>
          <BsPatchCheckFill style={styles.icon} />
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
      <h5>What Skills I Have</h5>
      <h2>My Experiences</h2>
      <div style={styles.container}>
        <ExperienceSection title="Frontend Development" skills={skillsFrontend} />
        <ExperienceSection title="Backend Development" skills={skillsBackend} />
      </div>
      <div style={styles.timeline}>
        <h3>Timeline & Achievements</h3>
        <div>
          <h4>Botlhale AI (September 2023 - August 2024)</h4>
          <ul>
            <li>
              Developed Python-based web scraping tools to automate data collection.
            </li>
            <li>
              Built audio processing pipelines to separate vocals and accompaniment for language learning projects.
            </li>
            <li>
              Contributed to chatbot development using NLP for interactive user engagement.
            </li>
          </ul>
        </div>
        <div>
          <h4>mLab CodeTribe (September 2024 - Present)</h4>
          <ul>
            <li>
              Immersive Full-Stack Developer trainee program focused on modern web and mobile technologies.
            </li>
            <li>
              Specialized in React Native and responsive web design.
            </li>
            <li>
              Gained hands-on experience with real-world projects to develop user-centric solutions.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
