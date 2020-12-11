import React from 'react';
import './App.css';
import MainLayout from './components/Layouts/MainLayout';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? <MainLayout /> : <SignIn />}
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}

export default App;
