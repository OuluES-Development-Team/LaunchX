import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import information from '../information.json'; 
import './Team.css';

const Team = () => {
  const teams = Array.isArray(information.teams) ? information.teams : [];

  return (
    <Container className="d-flex flex-column align-items-center pt-5">
      <h1 className="team-heading mb-5 mt-3">Meet the Teams</h1>
      <Row className="team-row w-100 border p-4">
        {teams.map((team, index) => (
          <Col key={index} md={12} className="mb-4">
            <Card className="team-card">
              <Row className="g-0 align-items-center">
                <Col md={3} className="d-flex justify-content-center">
                  <Card.Img
                    src="https://picsum.photos/200/300"
                    alt="Team Image"
                    className="team-card-img"
                  />
                </Col>
                <Col md={9}>
                  <Card.Body>
                    <Card.Title className="team-card-title">{team.name}</Card.Title>
                    <Card.Text className="team-card-description">{team.description}</Card.Text>
                    <h6>Members:</h6>
                    <ul className="list-unstyled">
                      {team.members.map((member, memberIndex) => (
                        <li key={memberIndex}>- {member}</li>
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

export default Team;