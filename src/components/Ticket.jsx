import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const Ticket = () => {
  return (
    <Container className="py-10 d-flex justify-content-center">
      <Row>
        <Col>
          <h1 className="text-center py-3">Get Ticket Now!</h1>
          <Card
            style={{ width: "18rem", borderRadius: "15px", overflow: "hidden", height: "100%" }}
          >
            <Card.Body>
              <Card.Title className="text-center">Card Title</Card.Title>
              <Card.Subtitle
                className="text-muted text-center mt-3 mb-5 border p-2"
                style={{ borderRadius: "15px" }}
              >
                €102
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of
              </Card.Text>
              <Card.Text className="text-center">
                <a
                  href="#"
                  className="btn btn-primary p-2"
                  style={{ borderRadius: "15px" }}
                >
                  Buy Ticket
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Ticket;
