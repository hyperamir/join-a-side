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
  
  return (
    <Router>
      <div className="App">
        {/* Add components here which will be rendered in all routes */}
        <Navbar />

        {/* Add components here which will be re-rendered */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<SubmitForm />}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/login" element={<Login />}/>
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
