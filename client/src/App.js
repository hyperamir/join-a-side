import logo from './logo.svg';
import { useState } from'react';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import LogoutButton from './components/LogoutButton'
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from './firebase-config'

function App() {

  // changes user 
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
  return (
    <div className="App">
      <p>login in: {user?.email}</p>
      <Register/>
      <Login/>
      <LogoutButton />
    </div>
  );
}

export default App;
