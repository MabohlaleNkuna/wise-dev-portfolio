import React from "react";
import IMG1 from "../assets/img1.png";
import IMG2 from "../assets/img2.png";
import IMG3 from "../assets/img3.png";
import IMG4 from "../assets/img4.png";
import IMG5 from "../assets/img5.png";
import IMG6 from "../assets/img6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project 1 Extra",
    technologies: "React, Node.js, Express", 
    github: "https://github.com/mabohlalenkuna/project1extra",
    demo: "https://mabohlalenkuna.dev/project1extra"
  },
  {
    id: 2,
    image: IMG2,
    title: "ToDo List",
    technologies: "React, Redux",
    github: "https://github.com/mabohlalenkuna/todolist",
    demo: "https://mabohlalenkuna.dev/todolist"
  },
  {
    id: 3,
    image: IMG3,
    title: "Shopping List",
    technologies: "React Native, Firebase",
    github: "https://github.com/mabohlalenkuna/shoppinglist",
    demo: "https://mabohlalenkuna.dev/shoppinglist"
  },
  {
    id: 4,
    image: IMG4,
    title: "Hotel Application",
    technologies: "React, Express, MongoDB",
    github: "https://github.com/mabohlalenkuna/hotelapp",
    demo: "https://mabohlalenkuna.dev/hotelapp"
  },
  {
    id: 5,
    image: IMG5,
    title: "Weather App",
    technologies: "React, Node.js, OpenWeather API",
    github: "https://github.com/mabohlalenkuna/weatherapp",
    demo: "https://mabohlalenkuna.dev/weatherapp"
  },
  {
    id: 6,
    image: IMG6,
    title: "Project 2 Extra",
    technologies: "React, Firebase",
    github: "https://github.com/mabohlalenkuna/project2extra",
    demo: "https://mabohlalenkuna.dev/project2extra"
  }
];

const Projects = () => {
  return (
    <section id="projects" style={styles.projectsSection}>
      <h5 style={styles.header}>My Recent Work</h5>
      <h2 style={styles.title}>Projects</h2>
      <div style={styles.container}>
        {data.map(({ id, image, title, technologies, github, demo }) => (
          <article key={id} style={styles.item}>
            <div style={styles.itemImage}>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{technologies}</p>
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
    textAlign: "center"
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
    backgroundColor: "#f9f9f9",
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
