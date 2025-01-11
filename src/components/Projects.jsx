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
    <section id="projects">
      <h2>Individual Projects</h2>
      <div className="container">
        {individualProjects.map(({ id, image, title, description, technologies, github, demo, features, challenges }) => (
          <article key={id} className="item">
            <div className="itemImage">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Tech Stack:</strong> {technologies}</p>
            <ul>
              <li><strong>Key Features:</strong> {features.join(", ")}</li>
              <li><strong>Challenges Faced and Solutions:</strong> {challenges}</li>
            </ul>
            <div className="cta">
              <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href={demo} className="btnPrimary" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>

      <h2>Group Projects</h2>
      <div className="container">
        {groupProjects.map(({ id, image, title, description, technologies, github, demo, features, team, collaboration }) => (
          <article key={id} className="item">
            <div className="itemImage">
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
            <div className="cta">
              <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href={demo} className="btnPrimary" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
