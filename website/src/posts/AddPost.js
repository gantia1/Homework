import { Form, Button, Row, Col, Container, InputGroup, FormControl } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function AddPost({getDataFromServer}) {
    const initialValues = {
        userId: '',
        title: '',
        body: ''
    }

    const [values, setValues] = useState(initialValues);
    const reset = () => setValues(initialValues);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value })
    };

    const add = async (event) => {
        event.preventDefault();
        const res = await axios.post('http://localhost:3030/posts', values);
        reset();
        alert('Post added!');
        getDataFromServer();
        console.log(res.data);
    };

    return (
        <Container bg='dark' variant="dark">
            <Form className='m-3' onReset={reset} onSubmit={add} >
                <Row>
                    <Col lg={4}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">userId</InputGroup.Text>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                type="number"
                                placeholder="userId"
                                value={values.userId}
                                name="userId"
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">title</InputGroup.Text>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                placeholder="title"
                                value={values.title}
                                name="title"
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">body</InputGroup.Text>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                placeholder="body"
                                value={values.body}
                                name="body"
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <div className='d-flex justify-content-end'>
                    <Button className='me-2' variant="secondary" type='reset' onClick={reset}>Reset</Button>
                    <Button variant="primary" type="submit">
                        Add Post
                    </Button>
                </div>
            </Form >
        </Container>
    );
}

export default AddPost;