import { useContext, useEffect, useState } from "react";
import api from "../components/api";
import LoadingContext from "../components/LoadingContext";
import AddPost from "./AddPost";
import Post from "./Post";


function PostsView() {

    const [post, setPost] = useState([]);
    const { setLoading } = useContext(LoadingContext);
    const [error, setError] = useState('');

    useEffect(() => {
        getData();
    }, []);

    // const getData = () => {
    //     axios.get('http://localhost:3030/posts')
    //         .then(({ data }) => {
    //             setPost(data);
    //         })
    // };

    const getData = async () => {
        await sendRequest(async () => {
            const { data } = await api.get('/posts')
            setPost(data);
        });
    };

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
        <>
            <AddPost getDataFromServer={getData} sendRequest={sendRequest} />
            <Post data={post} getDataFromServer={getData} sendRequest={sendRequest} error={error} />
        </>
    )
}


export default PostsView;