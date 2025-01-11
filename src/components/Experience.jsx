import React from "react";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
    padding: "0 2rem",
    width: "100%",
    boxSizing: "border-box",
    overflowX: "hidden", 
  },
  card: {
    background: "var(--color-bg-variant)",
    padding: "2.4rem 5rem",
    borderRadius: "2rem",
    border: "1px solid transparent",
    transition: "var(--transition)",
    width: "100%",
    boxSizing: "border-box",
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
  section: {
    background: "linear-gradient(135deg, #003366, #F4C561)",
    padding: "4rem 0",
    textAlign: "center",
    width: "100%",
    boxSizing: "border-box",
  },
  "@media (max-width: 768px)": {
    container: {
      gridTemplateColumns: "1fr", 
      gap: "1.5rem",
    },
    card: {
      padding: "2rem 3rem",
    },
    section: {
      padding: "3rem 1rem",
    },
    content: {
      gridTemplateColumns: "1fr", 
    },
  },
  "@media (max-width: 320px)": {
    container: {
      gridTemplateColumns: "1fr",
      padding: "0 1rem",
    },
    card: {
      padding: "1.6rem 2rem",
    },
    section: {
      padding: "2.5rem 0.5rem",
    },
    header: {
      fontSize: "1.6rem",
    },
  },
};

const globalStyles = {
  html: {
    margin: "0",
    padding: "0",
    width: "100%",
    overflowX: "hidden", 
  },
  body: {
    margin: "0",
    padding: "0",
    width: "100%",
    overflowX: "hidden", 
  },
};


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
  <div style={styles.card}>
    <h3 style={styles.header}>{title}</h3>
    <div style={styles.content}>
      {skills.map(({ skill, level }) => (
        <article style={styles.details} key={skill}>
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
    <section id="experience" style={styles.section}>
      <h2 style={{ color: "#FFFFFF", fontSize: "2.5rem", marginBottom: "2rem" }}>My Skills</h2>
      <div style={styles.container}>
        <ExperienceSection title="Frontend Development" skills={skillsFrontend} />
        <ExperienceSection title="Backend Development" skills={skillsBackend} />
      </div>
    </section>
  );
};

export default Experience;
