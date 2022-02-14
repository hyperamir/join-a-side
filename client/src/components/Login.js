import { useState } from 'react';
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
//import { auth } from '../service/firebase';
export default function Login(props) {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  
  const login = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in 
        console.log("good")
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }
 
  return (
    <div className="login">
      <h3> Login </h3>
      <form>
        <div>
          <label>UserEmail</label>
          <input placeholder="enter UserEmail here" 
            onChange={(event) => {setLoginEmail(event.target.value)}}
          />
        </div>
        <div>
        <label>Password</label>
          <input placeholder="enter Password here"
            onChange={(event) => {setLoginPassword(event.target.value)}}
          />
        </div>
        <button type="button" onClick={login}>Submit</button>
      </form>     
    </div>
 
  );
}