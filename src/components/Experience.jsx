import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./styles/Experience.css";

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
  <Card className="mb-4 shadow-sm border-0">
    <Card.Body>
      <h3 className="mb-4">{title}</h3>
      <Row className="g-3">
        {skills.map(({ skill, level }) => (
          <Col key={skill} xs={12} sm={6}>
            <div className="d-flex align-items-center">
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
