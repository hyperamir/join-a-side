import { useState } from 'react';
import  axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Login(props) {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  const login = async () => {
    const usersObject = {
      email: loginEmail,
      password: loginPassword
    }
   
    console.log(usersObject);
    axios.get("users/login",{params: usersObject})
    .then(response => {
      //console.log(response.data);
      props.setUser(response.data);
      navigate("/");

    });
    
  }

 
  return (
    <div className="flex flex-row justify-center">
      <div className="w-full max-w-xs m-20">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Email
            </label>
            <input 
            classNameName="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="username" 
            type="text" 
            placeholder="Username"
            onChange={(event) => {setLoginEmail(event.target.value)}}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input 
            classNameName="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            type="password" 
            placeholder="******************"
            onChange={(event) => {setLoginPassword(event.target.value)}}
            />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-between">
            <button 
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="button"
            onClick={login}>
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2022 Junhyuk Andy Park, Amir Sedaghat, Joshua Vottero
        </p>
      </div>
    </div>
 
  );
}