import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


function AddPost() {
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

    const add = async(event) => {
        event.preventDefault();
        const res = await axios.post('http://localhost:3000/posts', values);
        reset();
        alert('Post added!');
        setValues(initialValues);
        console.log(res.data);
    };

    return (

        <Form className='m-3' onReset={reset} onSubmit={add}>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3" >
                        <Form.Label>userId</Form.Label>
                        <Form.Control type="number"
                            placeholder="userId"
                            value={values.userId}
                            name="userId"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="title"
                            value={values.title}
                            name="title"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>body</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="body"
                            value={values.body}
                            name="body"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <div className='d-flex justify-content-end'>
                <Button className='me-2' variant="secondary" type='reset' onClick={reset}>Reset</Button>
                <Button variant="primary" type="submit">
                    Add Post
                </Button>
            </div>
        </Form >
    );
}

export default AddPost;