import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const FeedbackAndGoals = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4 fw-bold text-primary mb-4">
              Feedback & After-Program Aspirations
            </h1>
            <p className="text-muted fs-4">
              Insights and reflections from the program, alongside goals for the future.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col lg={4} md={6} className="mb-4">
            <Card className="shadow-lg border-0">
              <Card.Body>
                <Card.Title className="h4 text-secondary">Mentor Insights</Card.Title>
                <Card.Text className="text-muted">
                  "The mentor has provided valuable perspectives throughout the journey, offering both actionable feedback and motivational support."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <Card className="shadow-lg border-0">
              <Card.Body>
                <Card.Title className="h4 text-secondary">Personal Growth</Card.Title>
                <Card.Text className="text-muted">
                  "My abilities have expanded significantly in this program. I've developed a stronger grasp of full-stack methodologies and enhanced my problem-solving capabilities."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <Card className="shadow-lg border-0">
              <Card.Body>
                <Card.Title className="h4 text-secondary">Post-Program Aspirations</Card.Title>
                <Card.Text className="text-muted">
                  "I aim to further develop my skills and make a significant impact as a full-stack developer."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6} md={12} className="mb-4">
            <Card className="shadow-lg border-0">
              <Card.Body>
                <Card.Title className="h4 text-secondary">Immediate Aspirations</Card.Title>
                <ul className="list-unstyled text-muted">
                  <li>• Obtain a role in web development.</li>
                  <li>• Create 2-3 additional projects for my portfolio.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={12} className="mb-4">
            <Card className="shadow-lg border-0">
              <Card.Body>
                <Card.Title className="h4 text-secondary">Long-Term Aspirations</Card.Title>
                <ul className="list-unstyled text-muted">
                  <li>• Become proficient as a full-stack developer.</li>
                  <li>• Engage in meaningful open-source contributions.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeedbackAndGoals;
