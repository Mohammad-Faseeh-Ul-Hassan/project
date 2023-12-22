
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA3gV6EedMfjPB1bMotVMoq07rZm8dQ6bo",
    authDomain: "last-26d89.firebaseapp.com",
    projectId: "last-26d89",
    storageBucket: "last-26d89.appspot.com",
    messagingSenderId: "300512943622",
    appId: "1:300512943622:web:a3be6c845d8008dc7eed87"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
setPersistence(auth, browserSessionPersistence);

export { auth, provider, signInWithPopup, signOut };