import { useContext, useEffect, useState } from "react";
import { Badge, Container, ListGroup, Modal, Button, Form } from "react-bootstrap";
import { PersonFill, Send } from 'react-bootstrap-icons';
import api from "./api";
import UserContext from "./userContext";


function UserList() {

    const [users, setUsers] = useState([]);
    const { user } = useContext(UserContext);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const { data } = await api.get('/users')
        setUsers(data);
    };

    return (
        <Container className="mt-3">
            <ListGroup>
                {
                    users.filter(u => u.username !== user.username)
                        .map((user) => (
                            <ListGroup.Item key={user.firstName} className='d-flex align-items-center' onClick={handleShow}>
                                <PersonFill size="50px" className="me-3" />
                                <div className="flex-fill">
                                    {user.firstName} {user.lastName}
                                </div>
                                <Badge bg="primary" style={{ fontSize: 16, width: '100px' }}>{user.username}</Badge>
                            </ListGroup.Item>
                        ))
                }
            </ListGroup>
            <Modal show={show} size='lg'>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>{user.firstName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3 d-flex flex-row">
                            <Form.Control style={{resize:'none'}} as="textarea" rows={3} placeholder='Tyoe here...' />
                            <Button><Send></Send></Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close Modal</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default UserList;