import { useState } from'react';
import { auth } from '../firebase-config'
import { signOut } from 'firebase/auth';
export default function LogoutButton(props) {
  

  const logout = async () => {
    await signOut(auth);
  }

  return (
    <div class="login">
      <h3> Login </h3>
        <button onClick={logout}>Submit</button>
    </div>
 
  );
}