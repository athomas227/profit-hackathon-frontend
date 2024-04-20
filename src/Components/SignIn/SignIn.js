import React, { useState, useContext } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

// define the SignIn functional component
export default function SignIn() {
    // use state hooks to manage email and password input values
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // get the navigate function to navigate between routes
    const navigate = useNavigate();

    // get the login function from the AuthContext
    const { login } = useContext(AuthContext);

    // handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // call the login function
          await login(email, password);
          navigate("/");
        } catch (error) {
          console.error("Error signing in:", error);
        }
      };

    // render the component
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                <h2 className="text-center my-4">Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="d-block mx-auto">
                    Submit
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}