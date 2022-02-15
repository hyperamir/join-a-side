import './App.scss';
import Navbar from './components/Navbar';
import Post from './components/Post';
import SubmitForm from './components/SubmitForm/SubmitForm';
import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.scss';
import Login from './components/Login'
import Register from './components/Register'
import LogoutButton from './components/LogoutButton'
//import firebase from './service/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import "./service/firebase"
import axios from 'axios'


function App() {

  useEffect(() => {
    axios.get('http://localhost:3000/categories').then((response) => {
      console.log('data from back end!!: ')
      console.log(response)
    }).catch(e => {
      console.log('error:', e)
    })
  }, [])

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
      <Navbar></Navbar>
      <SubmitForm></SubmitForm>
      <Post></Post>
      <p>login: {user}</p>
      <Register />
      <Login />
      <LogoutButton />
    </div>
  );
}



export default App;
