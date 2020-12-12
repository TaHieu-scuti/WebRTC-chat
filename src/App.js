import React from 'react';
import './App.css';
import MainLayout from './components/Layouts/MainLayout';
import SignIn from './components/SignIn/SignInComponent';
import { auth } from './fb-config';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? <MainLayout /> : <SignIn />}
    </div>
  );
}

export default App;
