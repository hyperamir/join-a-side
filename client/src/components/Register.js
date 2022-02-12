import { useState } from'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config'
export default function Register(props) {

  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div class="login">
      <h3> Register new User </h3>
      <form>
        <div>
          <label>UserEmail</label>
          <input placeholder="enter UserEmail here" 
            onChange={(event) => {setRegisterEmail(event.target.value)}}
          />
        </div>
        <div>
        <label>Password</label>
          <input placeholder="enter Password here"
            onChange={(event) => {setRegisterPassword(event.target.value)}}
          />
        </div>
        <button onClick={register}>Submit</button>
      </form>     
    </div>
 
  );
}