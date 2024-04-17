import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SignUp() {
    return (
            <Container>
              <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                  <h2 className="text-center my-4">Sign Up</h2>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
        
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
        
                    <Form.Group controlId="formBasicFullName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your full name" />
                    </Form.Group>
        
                    <Form.Group controlId="formBasicPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" placeholder="Enter your phone number" />
                    </Form.Group>
        
                    <Button variant="primary" type="submit" className="d-block mx-auto">
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          );
}