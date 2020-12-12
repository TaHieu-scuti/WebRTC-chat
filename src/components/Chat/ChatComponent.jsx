import React, { useEffect, useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
}else {
  firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const ChatScreen = () => {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt', 'asc').limitToLast(25);

  const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = useState('');

  const scrollToBottom = () => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(scrollToBottom, [messages]);
  
  const sendMessage = async (e) => {
    e.preventDefault();
    // gets name, userID and pfp of logged in user
    const { displayName, uid, photoURL } = auth.currentUser;
  
    await messagesRef.add({
      user: displayName,
      body: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: uid,
      photoURL: photoURL
    })
  
    // resetting form value and scrolling to bottom
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <div className="main__header">
        <h6>Chat</h6>
      </div>

      <div className="main__chat_window">
        <ul className='messages'>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
        </ul>
      </div>
      
      <div className="main__message_container">
        <form onSubmit={sendMessage}>
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} type="text" id="chat_message" placeholder="Type message here..." />
        </form>
      </div>
    </>
  )
}

function ChatMessage(props) {
  const { user, body, uid, photoURL, createdAt } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'flex-row-reverse' : 'flex-row';
  const messageBodyClass = uid === auth.currentUser.uid ? 'sent-message-bg text-right' : 'received-message-bg';
  const imageClass = uid === auth.currentUser.uid ? 'ml-2' : 'mr-2';

  return (
    <div className={`message-chat ${messageClass}`}>
      <div>
        <img className={`image-chat ${imageClass}`} src={photoURL} alt="{user}'s photo" />
      </div>
      <div className={`body-chat ${messageBodyClass}`}>
        <p className="text">{user}</p>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default ChatScreen