import React, { useState } from "react";
import { Form } from "react-bootstrap";

type eventType = React.ChangeEvent<HTMLSelectElement>;

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    function updateChoice(event: eventType) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="multipleChoice">
                <Form.Label>Multiple Choice Question</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{expectedAnswer === choice ? "✔️" : "❌"}</div>
        </div>
    );
}
