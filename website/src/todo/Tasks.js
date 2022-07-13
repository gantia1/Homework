import { useContext, useEffect, useState } from "react";
import { Alert, Button, Container, Form, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import EditTaskModal from "./EditTaskModal";
import { PlusCircleFill, Trash, PencilSquare } from 'react-bootstrap-icons';
import LoadingContext from "../components/LoadingContext";
import api from "../components/api";


function TodoListItem({ task, doneTask, onDelete, onEdit }) {

    const handleDelete = () => {
        onDelete && onDelete(task);
    }

    const handleEdit = () => {
        onEdit && onEdit(task);
    }

    return (
        <ListGroup.Item
            className={`d-flex align-items-center ${task.done ? 'text-success' : 'text-danger'}`}
        >
            <Form.Check className="me-3" onChange={doneTask} checked={task.done}></Form.Check>
            <div className="flex-fill">
                {
                    task.done ? (
                        <del>{task.text}</del>
                    ) : (
                        <span>{task.text}</span>
                    )
                }
            </div>
            <Button className="me-2" variant='outline' onClick={handleEdit}><PencilSquare></PencilSquare></Button>
            <Button variant='outline' onClick={handleDelete}><Trash className="text-danger"></Trash></Button>
        </ListGroup.Item>
    );
}

function Tasks() {
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);
    const { setLoading } = useContext(LoadingContext);
    const [error, setError] = useState('');

    useEffect(() => {
        getData().catch(console.log.error);
    }, []);

    const getData = async () => {
        await sendRequest(async () => {
            const { data } = await api.get('/todos')
            setTasks(data);
    });
    };

    const addNewTask = async (event) => {
        event.preventDefault();
        await sendRequest(async () => {
            await api.post('/todos/', { text: value, done: false })
            await getData();
            setValue('');
        });
    };

    const toggleDone = (id) => async (event) => {
        const task = tasks.find((task) => task.id === id);
        task.done = event.target.checked;
        await sendRequest(async () => {
            await api.put(`/todos/${id}`, task);
            await getData();
        });
    };

    const deleteTask = async (task) => {
        const answer = window.confirm(`Are you sure you want to delete task ${task.text}?`)
        if (answer) {
            await sendRequest(async () => {
                await api.delete(`/todos/${task.id}`);
                await getData();
            });
        }
    };

    const updateTask = async (updatedTask) => {
        await sendRequest(async () => {
            await api.put(`/todos/${updatedTask.id}`, updatedTask);
            await getData();
        });
    };
    
    const openEditModal = (task) => {
        setCurrentTask(task)
    }

    const hideEditModal = () => {
        setCurrentTask(null);
    }
    const sendRequest = async (callback) => {
        setLoading(true);
        setError('');
        try {
            await callback();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container className='my-5'>
            <Form onSubmit={addNewTask}>
                <InputGroup className="mb-3" size='md'>
                    <FormControl
                        required
                        placeholder="Add new task"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <Button variant="outline-success" type="submit"><PlusCircleFill></PlusCircleFill></Button>
                </InputGroup>
                {
                    error && <Alert variant="danger">{error}</Alert>
                }
            </Form>
            <ListGroup className="mb-3">
                <ListGroup.Item variant="danger" className="text-center">Incomplete</ListGroup.Item>
                {
                    tasks.filter(task => !task.done).map((task) => (
                        <TodoListItem
                            key={task.id}
                            task={task}
                            doneTask={toggleDone(task.id)}
                            onDelete={deleteTask}
                            onEdit={openEditModal}
                        />
                    ))
                }
            </ListGroup>
            <ListGroup>
                <ListGroup.Item variant="success" className="text-center">Completed</ListGroup.Item>
                {
                    tasks.filter(task => task.done).map((task) => (
                        <TodoListItem
                            key={task.id}
                            task={task}
                            doneTask={toggleDone(task.id)}
                            onDelete={deleteTask}
                            onEdit={openEditModal}
                        />
                    ))
                }
            </ListGroup>

            <EditTaskModal
                task={currentTask}
                taskEdit={updateTask}
                onHide={hideEditModal}
            />
        </Container>
    );
}

export default Tasks;