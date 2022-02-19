import { useState } from 'react';
import  axios from 'axios';
import { useParams } from 'react-router-dom';
export default function Login(props) {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  
  const login = async () => {
    const usersObject = {
      email: loginEmail,
      password: loginPassword
    }
   
    console.log(usersObject);
    axios.get("users/show",{params: usersObject})
    .then(response => {
      console.log(response.data);
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