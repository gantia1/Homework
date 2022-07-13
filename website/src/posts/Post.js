import { useContext } from 'react';
import { Alert, Button, Container, Table } from 'react-bootstrap';
import { XOctagon } from 'react-bootstrap-icons'
import api from '../components/api';
import ThemeContext from '../components/ThemeContext';

function Post({ data = [], getDataFromServer, sendRequest, error }) {

    const { theme } = useContext(ThemeContext);

    const deletePost = async (id) => {
        const answer = window.confirm(`Are you sure you want to delete post ${id}?`);
        if (answer) {
            await sendRequest(async () => {
                await api.delete(`/posts/${id}`);
                alert(`Post ${id} has been deleted!`);
                getDataFromServer();
            });
        }
    }

    return (
        <Container>
            {
                error && <Alert variant="danger">{error}</Alert>
            }
            <Table striped bordered hover variant={theme} size='sm'>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((post) => (
                            <tr key={post.id}>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    <Button
                                        size="lg"
                                        variant="link"
                                        onClick={() => deletePost(post.id)}
                                    >
                                        <XOctagon className="text-danger"></XOctagon>
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default Post;