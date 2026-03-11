import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

type eventType = React.ChangeEvent<HTMLInputElement>;

export function GiveAttempts(): React.JSX.Element {
    const [attempts, getAttempts] = useState<number>(3);
    const [requestedAttempts, setAttempts] = useState<string>("");

    function increaseAttempts(): void {
        getAttempts(
            requestedAttempts !== "" ?
                parseInt(requestedAttempts) + attempts
            :   attempts,
        );
    }
    function decreaseAttempts(): void {
        getAttempts(attempts - 1);
    }
    return (
        <div>
            <p>Remaining Attempts: {attempts}</p>
            <div>
                <Form.Group controlId="requestedAttempts">
                    <Form.Label>
                        <h3>Give Attempts</h3>
                    </Form.Label>
                    <Form.Control
                        type="number"
                        value={
                            requestedAttempts !== "" ? requestedAttempts : ""
                        }
                        onChange={(event: eventType) => {
                            setAttempts(event.target.value);
                        }}
                    />
                </Form.Group>
            </div>
            <div>
                <Button onClick={decreaseAttempts} disabled={attempts === 0}>
                    Use
                </Button>
                <Button onClick={increaseAttempts}>Gain</Button>
            </div>
        </div>
    );
}
