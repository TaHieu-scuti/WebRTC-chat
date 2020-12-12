import React from 'react';
import './App.css';
import MainLayout from './components/Layouts/MainLayout';
import SignIn from './components/SignIn/SignInComponent';
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

export default App;
