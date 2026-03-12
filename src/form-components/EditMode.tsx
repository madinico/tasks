import React, { useState } from "react";
import { Form } from "react-bootstrap";

type eventType = React.ChangeEvent<HTMLInputElement>;

export function EditMode(): React.JSX.Element {
    //Gets users' name
    const [username, setUsername] = useState<string>("Your Name");
    // //Is a student - initialize as true
    const [isStudent, setStatus] = useState<boolean>(true);
    //In edit mode - initialize as false
    const [editMode, setEditMode] = useState<boolean>(false);

    function updateEditMode(event: eventType) {
        setEditMode(event.target.checked);
        setEditMode(!editMode);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="editModeSetting">
                <Form.Check
                    type="switch"
                    id="is-being-editted"
                    label="Edit Mode On?"
                    checked={editMode}
                    onChange={updateEditMode}
                />
            </Form.Group>
            <div>
                {username} is {isStudent ? "a student" : "not a student"}
                <br></br>
            </div>
            <div>
                <Form.Group controlId="changeUserName">
                    {editMode && (
                        <Form.Control
                            value={username}
                            onChange={(event: eventType) => {
                                setUsername(event.target.value);
                            }}
                        />
                    )}
                </Form.Group>
                <Form.Group controlId="changeStudentStatus">
                    {editMode && (
                        <Form.Check
                            type="checkbox"
                            id="is-student-check"
                            label="Student?"
                            checked={isStudent}
                            onChange={(event: eventType) => {
                                setStatus(event.target.checked);
                            }}
                            disabled={!editMode}
                        />
                    )}
                </Form.Group>
            </div>
        </div>
    );
}
