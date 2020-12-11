const ChatScreen = () => {
  return (
    <>
      <div className="main__header">
        <h6>Chat</h6>
      </div>

      <div className="main__chat_window">
        <ul className='messages'>
        </ul>
      </div>

      <div className="main__message_container">
        <input type="text" id="chat_message" placeholder="Type message here..." />
      </div>
    </>
  )
}

export default ChatScreen