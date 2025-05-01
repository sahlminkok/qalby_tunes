import { useEffect, useRef, useState } from 'react';
import songs from './data/songs';

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  function playNext() {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
  }

  function playPrevious() {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentSongIndex]);

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

      <div>
        <button type="button" onClick={playPrevious}>
          Previous
        </button>
        <button type="button" onClick={playNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
