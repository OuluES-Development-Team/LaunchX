import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import information from '../information.json'; 
import './Team.scss';


const Team = () => {
  const teams = Array.isArray(information.teams) ? information.teams : [];

  return (
    <Container className="d-flex flex-column align-items-center pt-5">
      <h1 className="team-heading mb-5 mt-3" data-text="Meet the Teams">Meet the Teams</h1>
      <Row className="team-row w-100">
        {teams.map((team, index) => (
          <Col key={index} md={12} className="mb-4">
            <Card className="team-card">
              <Row className="g-0 align-items-center">
              <Col md={3} className="d-flex justify-content-center align-items-center">
                  <Card.Img
                    src="https://res.cloudinary.com/daf9up52k/image/upload/v1747733388/Avatar_yh6dlr.jpg"
                    alt="Team Image"
                    className="team-card-img"
                  />
                </Col>
                <Col md={9}>
                  <Card.Body>
                    <Card.Title className="team-card-title" data-text ={team.name}>{team.name}</Card.Title>
                    <Card.Text className="team-card-description" data-text ={team.description}>{team.description}</Card.Text>
                    <div className="member-badge">
                      {/* <h6 data-text="Members">Members:</h6> */}
                      <ul className="member-list" >
                        {team.members.map((member, memberIndex) => (
                          <li key={memberIndex}> {member}</li>
                        ))}
                      </ul>
                    </div>
                    
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