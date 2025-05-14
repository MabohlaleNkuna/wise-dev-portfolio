import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import IMG00 from "../assets/img00.png";
import card from "../assets/card.png";
import shoplist from "../assets/shopping.jpg";
import hotel from "../assets/HotelScreenShot.png";
import travel from "../assets/travel.png";

const individualProjects = [
  {
    id: 1,
    image: card,
    title: "Card Guessing Game",
    description: "Flip, match, and beat the timer in this memory game.",
    technologies: "Node.js, JavaScript",
    github: "https://github.com/mabohlalenkuna/card-guessing-game",
    demo: "https://node-card-guessing-game-2.onrender.com",
  },
  {
    id: 2,
    image: shoplist,
    title: "Shopping List",
    description: "Smart shopping with synced lists using Firebase.",
    technologies: "React Native, Firebase",
    github: "https://github.com/mabohlalenkuna/shoppinglist",
    demo: "https://expo.dev/artifacts/eas/vbjoxALFfRFSHehumUTdHu.apk",
  },
  {
    id: 3,
    image: hotel,
    title: "Hotel Booking App",
    description: "Browse and book rooms with seamless payments.",
    technologies: "React, Express, MongoDB",
    github: "https://github.com/mabohlalenkuna/hotelapp",
    demo: "https://hotel-booking-app-client.netlify.app/",
  }
];

const groupProjects = [
  {
    id: 5,
    image: travel,
    title: "Travel Planner",
    description: "Plan trips based on live weather forecasts.",
    technologies: "React.js, Node.js, OpenWeatherMap API",
    github: "https://github.com/Yolanda-landii/Weather_Based-Travel_Planner",
    demo: "https://weather-based-travel-planner-eight.vercel.app/",
    collaboration: "Built in 2 days via pair programming with Yolanda Mabotja."
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <Container>
        <h2 className="text-center my-5" style={{ color: "#800000", fontWeight: 800 }}>
          My Projects
        </h2>

        <h3 className="mb-3 text-primary">Individual Projects</h3>
        <Row className="g-4">
          {individualProjects.map(({ id, image, title, description, technologies, github, demo }) => (
            <Col key={id} sm={12} md={6} lg={4}>
              <Card className="h-100 shadow-lg rounded small-card">
                <Card.Img variant="top" src={image} alt={title} className="small-card-img" />
                <Card.Body>
                  <Card.Title className="small-card-title">{title}</Card.Title>
                  <Card.Text className="small-card-text">{description}</Card.Text>
                  <Card.Text className="small-card-text"><strong>Tech:</strong> {technologies}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  <Button variant="outline-dark" href={github} target="_blank">GitHub</Button>
                  <Button variant="primary" href={demo} target="_blank">
                    {technologies.includes("React Native") ? "Download APK" : "Live Demo"}
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        <h3 className="mb-3 text-primary mt-4">Group Projects</h3>
        <Row className="g-4">
          {groupProjects.map(({ id, image, title, description, technologies, github, demo, collaboration }) => (
            <Col key={id} sm={12} md={6} lg={4}>
              <Card className="h-100 shadow-lg rounded small-card">
                <Card.Img variant="top" src={image} alt={title} className="small-card-img" />
                <Card.Body>
                  <Card.Title className="small-card-title">{title}</Card.Title>
                  <Card.Text className="small-card-text">{description}</Card.Text>
                  <Card.Text className="small-card-text"><strong>Tech:</strong> {technologies}</Card.Text>
                  <Card.Text className="small-card-text"><strong>Collab:</strong> {collaboration}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  <Button variant="outline-dark" href={github} target="_blank">GitHub</Button>
                  {demo && (
                    <Button variant="success" href={demo} target="_blank">Live Demo</Button>
                  )}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
