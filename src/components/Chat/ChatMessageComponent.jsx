import React from 'react';
import { auth } from '../../fb-config';

const ChatMessageComponent = (props) => {
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

export default ChatMessageComponent