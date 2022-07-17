import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import UserContext from './components/userContext';
import UserList from './components/UserList';


function App() {
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:3040/users/current',
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
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <UserList />
      </UserContext.Provider >
    ) : checked && (
      <Login />
    )
  )
}

export default App;