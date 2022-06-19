import { useEffect, useState } from "react";
import axios from 'axios';
import { Table } from 'react-bootstrap';

function Posts() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get('http://localhost/posts')
            .then(({ data }) => {
                setPost(data);
            })
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {
                    post.map((post) => (
                        <tr>
                            <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}

export default Posts;