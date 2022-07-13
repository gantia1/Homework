import { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";

function EditTaskModal({ task, taskEdit, onHide }) {

    const [value, setValue] = useState('');

    useEffect(() => {
        task && setValue(task.text);
    }, [task]);

    const handleSubmit = (event) => {
        event.preventDefault();
        taskEdit && taskEdit({ ...task, text: value });
        onHide();
    }

    return (
        task ? (
            <Modal show={true} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{`Editing task ${task.text}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Edit task"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <Button type="submit">edit</Button>
                        </InputGroup>
                    </Form>
                </Modal.Body>
            </Modal>
        ) : null
    )
}

export default EditTaskModal;