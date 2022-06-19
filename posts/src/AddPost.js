import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';


function AddPost() {
    const initialValues = {
        userId: '',
        title: '',
        body: ''
    }

    const [values, setValues] = useState(initialValues);
    const reset = () => setValues(initialValues);

    return (

        <Form className='m-3' onReset={reset}>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3" >
                        <Form.Label>userId</Form.Label>
                        <Form.Control type="text" placeholder="userId" value={values.userId} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>title</Form.Label>
                        <Form.Control type="text" placeholder="title" value={values.title} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>body</Form.Label>
                        <Form.Control type="text" placeholder="body" value={values.body} />
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