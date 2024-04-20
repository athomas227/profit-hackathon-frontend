import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "../Map/Map";

// define the Home component
export default function Home() {
    // define a state variable 'userLocation' to store the user's location
    // and a function 'setUserLocation' to update the state
    const [userLocation, setUserLocation] = useState();

    // define a function 'handleTrackLocation' to handle the user's location tracking
    const handleTrackLocation = () => {
        // check if the browser supports the Geolocation API
        if (navigator.geolocation) {
            // if supported, get the user's current position
            navigator.geolocation.getCurrentPosition(
                // if successful, update the 'userLocation' state with the latitude and longitude
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

    // render the component
    return (
        <div>
            <Container className="mt-4">
                <Row>
                <Col md={4}>
                    <h3>Find Your Nearest Mr. Softee Truck</h3>
                    <p>
                    Use the map to locate the nearest Mr. Softee ice cream truck in your area. The trucks' locations are updated in real-time, so you can always find the freshest and most delicious ice cream treats!
                    </p>
                    {/* render a button to trigger the location tracking */}
                    <button className="btn btn-primary" onClick={handleTrackLocation}>Track My Location</button>
                </Col>

                <Col md={8}>
                    {/* render the Map component and pass the 'userLocation' as a prop */}
                    <Map userLocation={userLocation}/>
                </Col>
                </Row>
            </Container>
        </div>
    )
}