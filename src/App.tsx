import React from "react";
import "./App.css";
import logo from "./images/StardewLogo.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "purple" }}
            >
                UD CISC275 with React Hooks and TypeScript
                <h3>Madison Saunders</h3>
            </header>
            <img
                src={logo}
                alt="The Stardew Valley start screen"
                style={{ width: 400, margin: 25 }}
            />
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "200px",
                                backgroundColor: "red",
                                float: "right",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "200px",
                                backgroundColor: "darkred",
                                float: "left",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <ul style={{ textAlign: "left" }}>
                <li>Cauliflower</li>
                <li>Potato</li>
                <li>Carrot</li>
                <li>Parsnip</li>
                <li>Kale</li>
            </ul>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <hr></hr>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. <br></br>
            </p>
        </div>
    );
}

export default App;
