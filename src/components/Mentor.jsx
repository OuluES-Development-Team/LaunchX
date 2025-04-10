import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import information from '../information.json'; 
import './Mentor.scss';
import Avatar from "../assets/Avatar.jpg";

const Mentor = () => {
  const mentors = Array.isArray(information.mentors) ? information.mentors : [];

  return (
    <Container className="d-flex flex-column align-items-center pt-5">
      <h1 className="mentor-heading mb-5" data-text="Speakers">Speakers</h1>
      <Row className="mentor-row w-100">
        {mentors.map((mentor, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="mentor-card">
              <Card.Img 
                variant="top" 
                src={"https://picsum.photos/500/400" }
                alt="Mentor Image" 
                className="mentor-card-img" 
              />
              <Card.Body className="mentor-card-body">
                <Card.Title className="mentor-card-title" data-text={mentor.name}>
                  {mentor.name}
                </Card.Title>
                <Card.Text className="mentor-card-description" data-text={mentor.description}>
                  {mentor.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Mentor;
