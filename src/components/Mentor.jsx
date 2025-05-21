import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import information from '../information.json'; 
import './Mentor.scss';


// Create a mapping of speaker names to their respective images
const speakerImages = {
  "Jan Schmidt": "https://res.cloudinary.com/daf9up52k/image/upload/v1747733061/janSchmidt_lpfhcz.jpg",
  "Jason Browser": "https://res.cloudinary.com/daf9up52k/image/upload/v1747748220/JasonBrowser_hj5rh9.jpg",
  "Jarmo Lumpus": "https://res.cloudinary.com/daf9up52k/image/upload/v1747733062/jarmoLumpus_fzxibn.jpg"
  // Add more mappings as needed
};


const Mentor = () => {
  const mentors = Array.isArray(information.mentors) ? information.mentors : [];


const getSpeakerImage = (speakerName) => {
  return speakerImages[speakerName] || defaultSpeaker;
};
  const defaultSpeaker = "https://res.cloudinary.com/daf9up52k/image/upload/v1747733388/Avatar_yh6dlr.jpg"; // Default image if no specific image is found
  return (
    <Container className="d-flex flex-column align-items-center pt-5">
      <h1 className="mentor-heading mb-5" data-text="Speakers">Speakers</h1>
      <Row className="mentor-row w-100">
        {mentors.map((mentor, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="mentor-card">
              <Card.Img 
                variant="top" 
                src={getSpeakerImage(mentor.name)} 
                alt={`${mentor.name} Image`} 
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
