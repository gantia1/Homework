import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async (event) => {
        event.preventDefault();
        const { data } = await axios.post('http://localhost:3030/login', { username, password });
        localStorage.setItem('token', data.token);
        window.location.reload();
    }

    return (
        <Container className='mt-3'>
            <Form onSubmit={login}>
                <Form.Group className="mb-3">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    )
}

export default Login;