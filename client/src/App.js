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
  //console.log(auth);
  // useEffect(() => {
  //     if (user) {
  //       setUser(user.email)
  //       console.log("sign in")
  //     } else {
  //       console.log("sign out")
  //       setUser(null)
  //     }
  // }, [])

  return (
    <Router>
      <div className="App">
        {/* Add components here which will be rendered in all routes */}
        <Navbar />

        {/* Add components here which will be re-rendered */}
        <Routes>
          {/* <Route path="/" element={<Post />} /> */}
          <Route path="/users" element={<SubmitForm user={user} />}/>
          <Route path="/signup" element={<Register setUser={setUser} />}/>
          <Route path="/login"  element={<Login setUser={setUser} />}/>
          <Route path="/categories/:id" element={<QuestionList />}/>
          <Route path="/categories/:id/:question_id" element={<Post user={user} />}/>

          {/* Send users to this route if such url doesn't exist */}
          {/* <Route path="/*" element={<Navigate to="/categories/:id"/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}



export default App;
