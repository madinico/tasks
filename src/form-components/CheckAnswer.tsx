import React, { useState } from "react";
import { Form } from "react-bootstrap";

type eventType = React.ChangeEvent<HTMLInputElement>;
export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: eventType) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="textbox">
                <Form.Label>
                    <h3> Check Answer: </h3>
                </Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
                {expectedAnswer === answer ? "✔️" : "❌"}
            </Form.Group>
        </div>
    );
}
