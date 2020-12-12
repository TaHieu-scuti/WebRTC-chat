import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyCFrAUChq13W2k_CF9yZXrlqxvF4TA414o",
      authDomain: "scuti-chat.firebaseapp.com",
      projectId: "scuti-chat",
      storageBucket: "scuti-chat.appspot.com",
      messagingSenderId: "449719856421",
      appId: "1:449719856421:web:78c320922a18e26fb9fecc",
      measurementId: "G-D0PJ75YQDF"
    })
} else {
    firebase.app();
}

export const auth = firebase.auth();
  