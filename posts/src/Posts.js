import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { XOctagon } from 'react-bootstrap-icons'

function Posts({ data = [], getDataFromServer }) {


    const deletePost = async (id) => {
        const answer = window.confirm(`Are you sure you want to delete post ${id}?`);
        if (answer) {
            await axios.delete(`http://localhost:3000/posts/${id}`);
            alert(`Post ${id} has been deleted!`);
            getDataFromServer();
        }
    }

    return (
        <Table striped bordered hover>
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
                    data.map((posts) => (
                        <tr>
                            <td>{posts.userId}</td>
                            <td>{posts.id}</td>
                            <td>{posts.title}</td>
                            <td>{posts.body}</td>
                            <div>
                                <Button
                                    size="lg"
                                    variant="link"
                                    onClick={() => deletePost(posts.id)}
                                >
                                    <XOctagon className="text-danger"></XOctagon>
                                </Button>
                            </div>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}

export default Posts;