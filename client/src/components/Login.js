import { useState } from'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
export default function Login(props) {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }
 
  return (
    <div class="login">
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
        <button onClick={login}>Submit</button>
      </form>     
    </div>
 
  );
}