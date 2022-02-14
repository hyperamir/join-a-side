import { signOut, getAuth } from 'firebase/auth';
export default function LogoutButton(props) {
  

  const logout = async () => {
    const auth = getAuth();
    auth.signOut();
  }

  return (
    <div className="logoutButton">
      <h3> Login </h3>
        <button onClick={logout}>Submit</button>
    </div>
 
  );
}