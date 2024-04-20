import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "../Map/Map";

export default function Home() {
    const [userLocation, setUserLocation] = useState();

    const handleTrackLocation = () => {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
            },
            (error) => {
            console.error('Error getting location:', error);
            }
        );
        } else {
        console.error('Geolocation is not supported by this browser.');
        }
    };

    return (
        <div>
            <Container className="mt-4">
                <Row>
                <Col md={4}>
                    <h3>Find Your Nearest Mr. Softee Truck</h3>
                    <p>
                    Use the map to locate the nearest Mr. Softee ice cream truck in your area. The trucks' locations are updated in real-time, so you can always find the freshest and most delicious ice cream treats!
                    </p>
                    <button className="btn btn-primary" onClick={handleTrackLocation}>Track My Location</button>
                </Col>

                <Col md={8}>
                    <Map userLocation={userLocation}/>
                </Col>
                </Row>
            </Container>
        </div>
    )
}