import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Profile() {

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h2 className="text-center my-4">Profile</h2>
            <Card className="text-center">
              <Card.Header>Welcome, {user.fullName}</Card.Header>
              <Card.Body>
                <Card.Title>User Profile</Card.Title>
                <Card.Text>
                  Email: {user.email} <br />
                  Phone: {user.phone}
                </Card.Text>
                <Button variant="primary">Edit Profile</Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                Member since {new Date(user.createdAt).toLocaleDateString()}
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
