import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center text-primary mb-4">Contact</h2>
        <div className="text-center mb-4">
          <p className="text-muted fs-5">
            Feel free to reach out for collaboration or inquiries. Let's connect and bring ideas to life!
          </p>
        </div>

        {/* Contact Options */}
        <Row className="g-4 justify-content-center">
          {/* WhatsApp */}
          <Col md={4} sm={6}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <FaWhatsapp className="text-success fs-1 mb-3" />
                <h4>WhatsApp</h4>
                <h5 className="text-muted">+27 72 184 3565</h5>
                <Button
                  href="https://api.whatsapp.com/send?phone=27721843565"
                  variant="outline-success"
                  className="mt-2"
                >
                  Send a Message
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* LinkedIn */}
          <Col md={4} sm={6}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <FaLinkedin className="text-primary fs-1 mb-3" />
                <h4>LinkedIn</h4>
                <h5 className="text-muted">Wise Nkuna</h5>
                <Button
                  href="https://www.linkedin.com/in/wise-nkuna-1a5525201/"
                  variant="outline-primary"
                  className="mt-2"
                >
                  Connect
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* GitHub */}
          <Col md={4} sm={6}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <FaGithub className="text-dark fs-1 mb-3" />
                <h4>GitHub</h4>
                <h5 className="text-muted">MabohlaleNkuna</h5>
                <Button
                  href="https://github.com/MabohlaleNkuna"
                  variant="outline-dark"
                  className="mt-2"
                >
                  View Repositories
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
