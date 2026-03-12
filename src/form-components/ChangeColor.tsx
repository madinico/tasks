import React, { useState } from "react";
import { Form } from "react-bootstrap";

//type eventSelectType = React.ChangeEvent<HTMLSelectElement>;
type eventInputType = React.ChangeEvent<HTMLInputElement>;

const COLORS = [
    "red",
    "orange",
    "yellow",
    "lightgreen",
    "turquoise",
    "pink",
    "violet",
    "purple",
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setColor] = useState<string>(DEFAULT_COLOR);

    function updateColor(event: eventInputType): void {
        setColor(event.target.value);
        //setColor(chosenColor);
    }

    return (
        <div>
            <Form.Group controlId="favoriteColors">
                <Form.Label>
                    <h3>Change Color</h3>
                </Form.Label>
                <div>
                    {COLORS.map((color: string) => (
                        <Form.Check
                            inline
                            key={color}
                            type="radio"
                            name="color"
                            id={`color-${color}`}
                            label={color}
                            value={color}
                            onChange={updateColor}
                            checked={chosenColor === color}
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            </Form.Group>
            <div>
                You have chosen{" "}
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    {chosenColor}
                </div>
            </div>
        </div>
    );
}
