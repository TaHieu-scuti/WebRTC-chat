const VideoControl = () => {
  return (
    <div className="main__controls">
      <div className="main__controls_block">
        <div className="main__controls_button main__mute_button">
          <i className="fas fa-microphone"></i>
          <span>Mute</span>
        </div>

        <div className="main__controls_button main__video_button">
          <i className="fas fa-video"></i>
          <span>Stop Video</span>
        </div>
      </div>

      <div className="main__controls_block">
        <div className="main__controls_button">
          <i className="fas fa-shield-alt"></i>
          <span>Security</span>
        </div>

        <div className="main__controls_button">
          <i className="fas fa-user-friends"></i>
          <span>Participants</span>
        </div>

        <div className="main__controls_button">
          <i className="fas fa-comment-alt"></i>
          <span>Chat</span>
        </div>
      </div>

      <div className="main__controls_block">  
        <div className="main__controls_button">
          <span className="leave_meeting">Leave Meeting</span>
        </div>
      </div>
    </div>
  )
}

export default VideoControl