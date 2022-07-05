import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { Alert, Container } from 'react-bootstrap';
import ThemeContext from './components/ThemeContext';
import Tasks from './todo/Tasks';
import PostsView from './posts/PostsView';


function App() {

  const [theme, setTheme] = useState('light');


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
    </ThemeContext.Provider>
  );
}

export default App;


