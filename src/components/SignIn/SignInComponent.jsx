import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../../fb-config';

const SignInComponent = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <div className="sign-in-content">
            <button className="sign-in" onClick={signInWithGoogle}>
                <img className="w-5 mr-2" src={process.env.PUBLIC_URL + '/google-icon.svg'} alt='Google Icon' />
                <span>Sign In With Google</span>
            </button>
        </div>
    )
}

export default SignInComponent