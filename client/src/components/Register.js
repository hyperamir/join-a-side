import { useState } from 'react';
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
export default function Register(props) {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message
    });
  }

  return (
    <div className="register">
      <h3> Register new User </h3>
      <form>
        <div>
          <label>UserEmail</label>
          <input placeholder="enter UserEmail here" 
            onChange={(event) => {
              setRegisterEmail(event.target.value)
            }}
          />
        </div>
        <div>
        <label>Password</label>
          <input placeholder="enter Password here"
            onChange={(event) => {setRegisterPassword(event.target.value)}}
          />
        </div>
        <button type="button" onClick={register}>Submit</button>
      </form>     
    </div>
 
  );
}