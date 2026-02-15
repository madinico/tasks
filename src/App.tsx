import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h3>Madison Saunders</h3>
            </header>
            <header>Stardew Valley</header>

            <img
                src="../images/StardewLogo.jpg"
                alt="The Stardew Valley start screen"
            />

            <h4>Crops grown in the Spring</h4>
            <ul>
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
