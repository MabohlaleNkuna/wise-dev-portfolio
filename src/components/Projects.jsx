import React from "react";
import IMG1 from "../assets/img1.png";
import IMG2 from "../assets/img2.png";
import IMG3 from "../assets/img3.png";
import IMG4 from "../assets/img4.png";
import IMG5 from "../assets/img5.png";
import IMG6 from "../assets/img6.png";

const individualProjects = [
  {
    id: 1,
    image: IMG1,
    title: "Project 1 Extra",
    description: "A brief overview of Project 1 Extra.",
    technologies: "React, Node.js, Express",
    github: "https://github.com/mabohlalenkuna/project1extra",
    demo: "https://mabohlalenkuna.dev/project1extra",
    features: ["Feature 1", "Feature 2"],
    challenges: "Resolved issue with server latency."
  },
  {
    id: 2,
    image: IMG2,
    title: "ToDo List",
    description: "A simple task management app.",
    technologies: "React, Redux",
    github: "https://github.com/mabohlalenkuna/todolist",
    demo: "https://mabohlalenkuna.dev/todolist",
    features: ["Add tasks", "Filter tasks"],
    challenges: "Overcame performance issues with Redux state management."
  },
  {
    id: 3,
    image: IMG3,
    title: "Shopping List",
    description: "A shopping list app with Firebase integration.",
    technologies: "React Native, Firebase",
    github: "https://github.com/mabohlalenkuna/shoppinglist",
    demo: "https://mabohlalenkuna.dev/shoppinglist",
    features: ["Sync data across devices", "Push notifications"],
    challenges: "Managed real-time data syncing with Firebase."
  }
];

const groupProjects = [
  {
    id: 4,
    image: IMG4,
    title: "Hotel Application",
    description: "A hotel booking system with Express and MongoDB.",
    technologies: "React, Express, MongoDB",
    github: "https://github.com/mabohlalenkuna/hotelapp",
    demo: "https://mabohlalenkuna.dev/hotelapp",
    features: ["Room booking", "Payment gateway integration"],
    team: ["John Doe", "Jane Smith"],
    collaboration: "Worked in an Agile environment using Trello."
  },
  {
    id: 5,
    image: IMG5,
    title: "Weather App",
    description: "An app that shows real-time weather data.",
    technologies: "React, Node.js, OpenWeather API",
    github: "https://github.com/mabohlalenkuna/weatherapp",
    demo: "https://mabohlalenkuna.dev/weatherapp",
    features: ["Current weather", "Hourly forecast"],
    team: ["Alice Brown", "Charlie Green"],
    collaboration: "Collaborated using GitHub and Slack."
  }
];

const Projects = () => {
  return (
    <section id="projects" style={styles.projectsSection}>
      <h2 style={styles.title}>Individual Projects</h2>
      <div style={styles.container}>
        {individualProjects.map(({ id, image, title, description, technologies, github, demo, features, challenges }) => (
          <article key={id} style={styles.item}>
            <div style={styles.itemImage}>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Tech Stack:</strong> {technologies}</p>
            <ul>
              <li><strong>Key Features:</strong> {features.join(", ")}</li>
              <li><strong>Challenges Faced and Solutions:</strong> {challenges}</li>
            </ul>
            <div style={styles.cta}>
              <a href={github} style={styles.btn} target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href={demo} style={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>

      <h2 style={styles.title}>Group Projects</h2>
      <div style={styles.container}>
        {groupProjects.map(({ id, image, title, description, technologies, github, demo, features, team, collaboration }) => (
          <article key={id} style={styles.item}>
            <div style={styles.itemImage}>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Tech Stack:</strong> {technologies}</p>
            <ul>
              <li><strong>Key Features:</strong> {features.join(", ")}</li>
              <li><strong>Team Members:</strong> {team.join(", ")}</li>
              <li><strong>Collaboration Experience:</strong> {collaboration}</li>
            </ul>
            <div style={styles.cta}>
              <a href={github} style={styles.btn} target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href={demo} style={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
const styles = {
  projectsSection: {
    padding: "4rem 0",
    textAlign: "center",
    background: "linear-gradient(to bottom, #004AAD, #F4C561)", 
    color: "#FFFFFF" 
  },
  header: {
    fontSize: "1.2rem",
    color: "#333"
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "2rem"
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2.5rem",
    marginTop: "2rem"
  },
  item: {
    backgroundColor: "transparent", 
    padding: "1.2rem",
    borderRadius: "2rem",
    border: "1px solid transparent",
    transition: "0.3s ease-in-out",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  },
  itemImage: {
    borderRadius: "1.5rem",
    overflow: "hidden",
    marginBottom: "1rem"
  },
  cta: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem"
  },
  btn: {
    padding: "0.8rem 1.2rem",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "4px",
    textDecoration: "none",
    textAlign: "center"
  },
  btnPrimary: {
    padding: "0.8rem 1.2rem",
    backgroundColor: "#004AAD",
    color: "#fff",
    borderRadius: "4px",
    textDecoration: "none",
    textAlign: "center"
  },
  // Media Queries
  '@media screen and (max-width: 1024px)': {
    container: {
      gridTemplateColumns: "1fr 1fr",
      gap: "1.2rem"
    }
  },
  '@media screen and (max-width: 600px)': {
    container: {
      gridTemplateColumns: "1fr",
      gap: "1rem"
    }
  }
};

export default Projects;
