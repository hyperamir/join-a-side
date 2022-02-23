import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Main from './components/Main'
import Post from './components/Post';
import SubmitForm from './components/SubmitForm/SubmitForm';
import { useEffect, useState } from 'react';
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import QuestionList from './components/Post/QuestionList';

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
        <Navbar user={user} setUser={setUser} />

        {/* Add components here which will be re-rendered */}
        <Routes>
          {/* <Route path="/" element={<Post />} /> */}
          <Route path="/users" element={<SubmitForm user={user} />}/>
          <Route path="/" element={<Main />} />
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
