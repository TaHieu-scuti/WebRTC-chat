import React, { useEffect, useRef, useState } from 'react';
import { auth } from '../../fb-config';
import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from "./ChatMessageComponent";

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

export default ChatScreen