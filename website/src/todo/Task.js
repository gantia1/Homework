import { useEffect, useState } from 'react';
import { Button, Container, Form, InputGroup, ListGroup } from 'react-bootstrap';
import { PlusCircleFill, Trash, Pencil } from 'react-bootstrap-icons';
import axios from 'axios';

function Task() {
    const initialValues = {
        text: '',
        done: 'false'
    }

    useEffect(() => {
        getData();
    }, []);

    const [task, setTask] = useState([]);
    const [values, setValues] = useState(initialValues);
    const reset = () => setValues(initialValues);

    const getData = () => {
        axios.get('http://localhost:3030/todos')
            .then(({ data }) => {
                setTask(data);
            })
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value })
    };

    const add = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:3030/todos/', values);
        reset();
        getData();

    };

    return (
        <Container className='my-5'>
            <Form onSubmit={add}>
                <InputGroup className="mb-3" size='lg'>
                    <Form.Control
                        placeholder="Task"
                        aria-label="Task"
                        value={values.text}
                        name="text"
                        onChange={handleChange}
                    />
                    <Button variant="outline-success" type='submit'>
                        <PlusCircleFill></PlusCircleFill>
                    </Button>

                </InputGroup>
            </Form>
            <ListGroup className='mt-4'>
                <ListGroup.Item variant="danger">Undone tasks</ListGroup.Item>
                {
                    task.map((task) => (


                        <ListGroup.Item key={task.id} className='d-flex flex-row'>
                            <Form.Check className='me-3'
                                type='checkbox'
                            />
                            <div className='flex-fill'>{task.text}</div>
                            <Button variant='outline'><Pencil></Pencil></Button>
                            <Button variant='outline'><Trash></Trash></Button>
                        </ListGroup.Item>

                    ))
                }
            </ListGroup>
        </Container>
    )

}
export default Task;


