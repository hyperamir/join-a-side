import React from 'react';
import ReactDOM from 'react-dom';
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
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import QuestionList from './components/Post/QuestionList';
import Question from './components/Post/index'

function App() {
  

  // changes user 
  //const [user, setUser] = useState({});
  const [user, setUser] = useState(null);
  const auth = getAuth();
  //console.log(auth);
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

  //console.log(user);

  return (
    <Router>
      <div className="App">
        {/* Add components here which will be rendered in all routes */}
        <Navbar />

        {/* Add components here which will be re-rendered */}
        <Routes>
          {/* <Route path="/" element={<Post />} /> */}
          <Route path="/users" element={<SubmitForm />}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/login" setUser={setUser} element={<Login />}/>
          <Route path="/categories/:id" element={<QuestionList />}/>
          <Route path="/categories/:id/:question_id" element={<Post />}/>

          {/* Send users to this route if such url doesn't exist */}
          {/* <Route path="/*" element={<Navigate to="/categories/:id"/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}



export default App;
