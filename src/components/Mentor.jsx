import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import information from '../information.json'; 
import './Mentor.css';

const Mentor = () => {
  const mentors = Array.isArray(information.mentors) ? information.mentors : [];

  return (
    <Container className="d-flex flex-column align-items-center pt-5">
      <h1 className="mentor-heading mb-5">Meet the Mentors</h1>
      <Row className="mentor-row w-100 border p-4">
        {mentors.map((mentor, index) => (
          <Col key={index} md={12} className="mb-4">
            <Card className="mentor-card ">
              <Row className="g-0 align-items-center">
                <Col md={3} className="d-flex justify-content-center">
                  <Card.Img
                    src="https://picsum.photos/200/300"
                    alt="Mentor Image"
                    className="mentor-card-img"
                  />
                </Col>
                <Col md={9}>
                  <Card.Body>
                    <Card.Title className="mentor-card-title">{mentor.name}</Card.Title>
                    <Card.Text className="mentor-card-description">{mentor.description}</Card.Text>
                    <h6>Expertise:</h6>
                    <ul className="list-unstyled">
                      {mentor.expertise.map((skill, skillIndex) => (
                        <li key={skillIndex}>- {skill}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Mentor;