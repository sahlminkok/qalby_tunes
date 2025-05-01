import { useRef, useState } from 'react';
import songs from './data/songs';

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  return (
    <div className="App">
      <h2>
        {songs[currentSongIndex].title} - {songs[currentSongIndex].artist}
      </h2>

      <audio ref={audioRef} controls autoPlay>
        <source src={songs[currentSongIndex].src} type="audio/mpeg" />
        <track kind="captions" src="" label="English captions" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default App;
