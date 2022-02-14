// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import 'firebase/auth';
// require('dotenv').config({ "path": false })
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// will need to set up .env with firebase app code from firebase website
const firebaseConfig = {
  
  apiKey:  process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId

};

// Initialize Firebase
initializeApp(firebaseConfig);

// pass auth to firebase
//export const auth = firebase.auth()

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithEmailAndPassword(provider)

//export default firebase;