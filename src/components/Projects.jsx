import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import IMG00 from "../assets/img00.png";


const individualProjects = [
  {
    id: 1,
    image: IMG00,
    title: "Project 1 Extra",
    description: "A brief overview of Project 1 Extra.",
    technologies: "React, Node.js, Express",
    github: "https://github.com/mabohlalenkuna/project1extra",
    demo: "https://mabohlalenkuna.dev/project1extra",
    features: ["Feature 1", "Feature 2"],
    challenges: "Resolved issue with server latency.",
  },
  {
    id: 2,
    image: IMG00,
    title: "ToDo List",
    description: "A simple task management app.",
    technologies: "React, Redux",
    github: "https://github.com/mabohlalenkuna/todolist",
    demo: "https://mabohlalenkuna.dev/todolist",
    features: ["Add tasks", "Filter tasks"],
    challenges: "Overcame performance issues with Redux state management.",
  },
  {
    id: 3,
    image: IMG00,
    title: "Shopping List",
    description: "A shopping list app with Firebase integration.",
    technologies: "React Native, Firebase",
    github: "https://github.com/mabohlalenkuna/shoppinglist",
    demo: "https://mabohlalenkuna.dev/shoppinglist",
    features: ["Sync data across devices", "Push notifications"],
    challenges: "Managed real-time data syncing with Firebase.",
  },
];

const groupProjects = [
  {
    id: 4,
    image: IMG00,
    title: "Hotel Application",
    description: "A hotel booking system with Express and MongoDB.",
    technologies: "React, Express, MongoDB",
    github: "https://github.com/mabohlalenkuna/hotelapp",
    demo: "https://mabohlalenkuna.dev/hotelapp",
    features: ["Room booking", "Payment gateway integration"],
    team: ["John Doe", "Jane Smith"],
    collaboration: "Worked in an Agile environment using Trello.",
  },
 
];

const Projects = () => {
  return (
    <section id="projects">
      <Container>
        <h2 className="text-center my-5" style={{ color: "#800000", fontWeight: 800 }}>
          My Projects
        </h2>

        <h3 className="mb-4 text-primary">Individual Projects</h3>
        <Row className="g-4">
          {individualProjects.map(
            ({ id, image, title, description, technologies, github, demo, features, challenges }) => (
              <Col key={id} sm={12} md={6} lg={4}>
                <Card className="h-100 shadow-lg rounded">
                  <Card.Img variant="top" src={image} alt={title} style={{ height: "200px", objectFit: "cover" }} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>
                      <strong>Tech Stack:</strong> {technologies}
                    </Card.Text>
                    <Card.Text>
                      <strong>Key Features:</strong> {features.join(", ")}
                    </Card.Text>
                    <Card.Text>
                      <strong>Challenges:</strong> {challenges}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between">
                    <Button variant="outline-dark" href={github} target="_blank" rel="noopener noreferrer">
                      Github
                    </Button>
                    <Button variant="primary" href={demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            )
          )}
        </Row>

        <h3 className="mt-5 mb-4 text-success">Group Projects</h3>
        <Row className="g-4">
          {groupProjects.map(
            ({ id, image, title, description, technologies, github, demo, features, team, collaboration }) => (
              <Col key={id} sm={12} md={6} lg={4}>
                <Card className="h-100 shadow-lg rounded">
                  <Card.Img variant="top" src={image} alt={title} style={{ height: "200px", objectFit: "cover" }} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>
                      <strong>Tech Stack:</strong> {technologies}
                    </Card.Text>
                    <Card.Text>
                      <strong>Key Features:</strong> {features.join(", ")}
                    </Card.Text>
                    <Card.Text>
                      <strong>Team Members:</strong> {team.join(", ")}
                    </Card.Text>
                    <Card.Text>
                      <strong>Collaboration:</strong> {collaboration}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between">
                    <Button variant="outline-dark" href={github} target="_blank" rel="noopener noreferrer">
                      Github
                    </Button>
                    <Button variant="success" href={demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
