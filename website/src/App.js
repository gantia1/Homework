import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { Alert, Container } from 'react-bootstrap';
import ThemeContext from './components/ThemeContext';
import Tasks from './todo/Tasks';
import PostsView from './posts/PostsView';
import Login from './login/Login';
import UserContext from './components/UserContext';
import axios from 'axios';


function App() {

  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:3030/user',
        {
          headers: {
            authorization: token
          }
        })
        .then(res => setUser(res.data))
    } else {
      setChecked(true);
    }
  }, []);

  return (

    user ? (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <UserContext.Provider value={{ user, setUser }}>
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
                  /><Route
                    path='/posts'
                    element=
                    {<PostsView />}
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
                  <Route path='todo' element={<Tasks />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    ) : checked && (
      <Login />
    )

  );
}

export default App;