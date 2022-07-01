import './App.css';
import AddPost from './posts/AddPost';
import Posts from './posts/Posts';
import Todo from './todo/Todo';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { Alert, Container } from 'react-bootstrap';
import ThemeContext from './components/ThemeContext';


function App() {

  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://localhost:3030/posts')
      .then(({ data }) => {
        setPosts(data);
      })
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`bg-${theme}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path=""
                element=
                {
                  <Container>
                    <Alert className='mt-3 text-center'>
                      <h1>Welcome!</h1>
                    </Alert>
                  </Container>
                }
              />
              <Route
                path='/posts'
                element=
                {
                  <>
                    <AddPost getDataFromServer={getData()} />
                    <Posts data={posts} getDataFromServer={getData()} />
                  </>
                }
              />
              <Route
                path='*'
                element=
                {
                  <Container>
                    <Alert variant='danger' className='mt-3 text-center'>Page not found</Alert>
                  </Container>
                }
              />
              <Route path='todo' element={<Todo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;


