// import logo from './logo.svg';
import VideoPlayer from './VideoPlayer';
import Comments from './Comments';
import Recommendations from './Recommendations';
import './App.css';

function App() {


  return (
    <div className="app">
      <div className="column">
        <div className="primary">
          <VideoPlayer />
          <Comments />
        </div>
        <div className="secondary">
          <Recommendations />
        </div>
      </div>
    </div>
  );
}

export default App;
