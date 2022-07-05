import axios from "axios";
import { useEffect, useState } from "react";
import AddPost from "./AddPost";
import Post from "./Post";


function PostsView() {

    const [post, setPost] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get('http://localhost:3030/posts')
            .then(({ data }) => {
                setPost(data);
            })
    };
    return (
        <>
            <AddPost getDataFromServer={getData} />
            <Post data={post} getDataFromServer={getData} />
        </>
    )
}


export default PostsView;