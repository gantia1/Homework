import './App.css';
import AddPosts from './AddPosts';
import Posts from './Posts';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      getData();
  }, []);

  const getData = () => {
      axios.get('http://localhost:3000/posts')
          .then(({ data }) => {
              setPosts(data);
          })
  };
  return (
    <div>
      <AddPosts getDataFromServer={getData()}/>
      <Posts data={posts} getDataFromServer={getData()}/>
    </div>
  );
}

export default App;
