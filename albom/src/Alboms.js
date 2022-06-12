import { useEffect, useState } from "react";
import axios from 'axios';
import { Card, Row , Col, Button} from 'react-bootstrap';


function Alboms() {
    const [albom, setAlbom] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(({ data }) => {
                setAlbom(data);
            })
    }, []);
    return (
        <div>
            <Row >
                {
                    albom.map((albom) => (
                        <Col lg={3} md={4} sm={6} key={albom.id}>
                            <Card className="m-3" style={{height:"500px"}}>
                                <Card.Img style={{height:"60%"}} variant="top" src="logo192.png"/>
                                <Card.Body>
                                    {albom.title}
                                </Card.Body>
                                <Card.Footer><Button>Open</Button></Card.Footer>
                            </Card>
                        </Col>
                    ))
                }
                </Row >
        </div>
    );
}



export default Alboms;