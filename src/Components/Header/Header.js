import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
        await logout();
        navigate("/");
        } catch (error) {
        console.error("Error signing out:", error);
        }
    };

    return (
        <div>
            <Navbar  data-bs-theme="dark"
            style={{
                backgroundColor: 'pink',
                border: '2px solid blue',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
              }}>
                <Container>
                    <Navbar.Brand href="/">SwiftSwirl</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                        <Nav.Link href="/signin">Login</Nav.Link>
                        <Nav.Link href="#">Locator</Nav.Link>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                    </Nav>
                    {currentUser && (
                        <Button variant="outline-danger" onClick={handleSignOut}>
                        Sign Out
                        </Button>
                    )}
                </Container>
            </Navbar>
        </div>
    )
}