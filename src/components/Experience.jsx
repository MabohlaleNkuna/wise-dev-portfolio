import React from "react"; 
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/Experience.css";

const skillsFrontend = [
  { skill: "HTML", level: "Experienced", icon: "bi bi-file-earmark-code", color: "#e34f26" },
  { skill: "CSS", level: "Experienced", icon: "bi bi-braces", color: "#264de4" },
  { skill: "JavaScript", level: "Experienced", icon: "bi bi-code-slash", color: "#f7df1e" },
  { skill: "Tailwind", level: "Experienced", icon: "bi bi-palette", color: "#38bdf8" },
  { skill: "React", level: "Experienced", icon: "bi bi-braces-asterisk", color: "#61dafb" },
  { skill: "React Native", level: "Experienced", icon: "bi bi-phone", color: "#61dafb" },
];

const skillsBackend = [
  { skill: "Node.js", level: "Experienced", icon: "bi bi-server", color: "#3c873a" },
  { skill: "Express", level: "Experienced", icon: "bi bi-cpu", color: "#000000" },
  { skill: "MongoDB", level: "Experienced", icon: "bi bi-database", color: "#47a248" },
  { skill: "SQLite", level: "Experienced", icon: "bi bi-hdd", color: "#003b57" },
  { skill: "Firebase", level: "Experienced", icon: "bi bi-cloud", color: "#ffcb2d" },
];

const ExperienceSection = ({ title, skills }) => (
  <Card className="mb-4 shadow-sm border-0">
    <Card.Body>
      <h3 className="mb-4">{title}</h3>
      <Row className="g-3">
        {skills.map(({ skill, level, icon, color }) => (
          <Col key={skill} xs={12} sm={6}>
            <div className="d-flex align-items-center">
              <i 
                className={icon + " me-3"} 
                style={{ fontSize: "1.8rem", color: color }}
              ></i>
              <div>
                <h5 className="mb-1">{skill}</h5>
                <small className="text-muted">{level}</small>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Card.Body>
  </Card>
);

const Experience = () => {
  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">My Skills</h2>
        <Row>
          <Col md={6}>
            <ExperienceSection title="Frontend Development" skills={skillsFrontend} />
          </Col>
          <Col md={6}>
            <ExperienceSection title="Backend Development" skills={skillsBackend} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
