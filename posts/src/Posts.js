import { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { XOctagon } from 'react-bootstrap-icons'

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then(({ data }) => {
                setPosts(data);
            })
    }, []);
    const remove = async (id) => {
        await axios.delete(`http://localhost:3000/posts/${id}`);
        alert('Post removed!');
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map((posts) => (
                        <tr>
                            <td>{posts.userId}</td>
                            <td>{posts.id}</td>
                            <td>{posts.title}</td>
                            <td>{posts.body}</td>
                            <div>
                                <Button size="lg" variant="link" onClick={() => remove(posts.id)}><XOctagon className="text-danger"></XOctagon></Button>
                            </div>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}

export default Posts;