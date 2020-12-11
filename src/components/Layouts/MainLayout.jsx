import ChatScreen from '../Chat/ChatComponent';
import VideoScreen from '../Video/VideoComponent';
import VideoControl from '../Video/VideoControlComponent';

const MainLayout = () => {
  return (
    <div className="main">
      <div className="main__left">
        <VideoScreen/>
        <VideoControl />
      </div>
      <div className="main__right">
        <ChatScreen />
      </div>
    </div>
  )
}

export default MainLayout;