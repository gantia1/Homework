import { useEffect, useState } from "react";
import axios from 'axios';
import { Card, Row, Col, Button, Modal } from 'react-bootstrap';


function AlbomsCard({ data, onOpen }) {
const {id, title} = data;
    const handleClick = () => {
        onOpen && onOpen(id);
    };

    return (
        <Card className="m-3" style={{ height: "500px" }}>
            <Card.Img style={{ height: "60%" }} variant="top" src="logo192.png" />
            <Card.Body>
                <p>ID: {id} </p>
                <p>{title}</p>
            </Card.Body>
            <Card.Footer>
                <Button onClick={handleClick}>Open</Button>
            </Card.Footer>
        </Card>
    )
}
function Alboms() {
    const [albom, setAlbom] = useState([]);
    const [show, setShow] = useState(false);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(({ data }) => {
                setAlbom(data);
            })
    }, []);



    const handleClose = () => {
        setShow(false);
    }

    return (
        <div>
            <Row >
                {
                    albom.map((albom) => (
                        <Col lg={3} md={4} sm={6} key={albom.id}>
                            <AlbomsCard data={albom} onOpen={(albomData) => setShow(true)} />
                        </Col>
                    ))
                }
            </Row >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}



export default Alboms;