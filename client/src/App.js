import logo from './logo.svg';
import { useEffect, useState } from'react';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import LogoutButton from './components/LogoutButton'
//import firebase from './service/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import "./service/firebase"

function App() {
  
  // changes user 
  //const [user, setUser] = useState({});
  const [user, setUser] = useState(null);
  const auth = getAuth();
  console.log(auth);
  useEffect(() => { 
   onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user.email) 
      console.log("sign in")
    } else {
      console.log("sign out")
      setUser(null) 
    }
   });
  }, []) 

  console.log(user);

  return (
    <div className="App">
      <p>login: {user}</p>
      <Register />
      <Login />
      <LogoutButton />
    </div>
  );
}



export default App;
