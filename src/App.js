import { useEffect, useRef, useState } from 'react';
import songs from './data/songs';

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
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

  function pauseAudio() {
    audioRef.current.pause();
    setIsPlaying(false);
  }

  function playAudio() {
    audioRef.current.play();
    setIsPlaying(true);
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.load();
  }, [currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  return (
    <div className="App">
      <h2>
        {songs[currentSongIndex].title} - {songs[currentSongIndex].artist}
      </h2>

      <audio ref={audioRef}>
        <source src={songs[currentSongIndex].src} type="audio/mpeg" />
        <track kind="captions" src="" label="English captions" />
        Your browser does not support the audio element.
      </audio>

      <div>
        <button type="button" onClick={playPrevious}>
          Previous
        </button>
        {isPlaying ? (
          <button type="button" onClick={pauseAudio}>
            Pause
          </button>
        ) : (
          <button type="button" onClick={playAudio}>
            Play
          </button>
        )}
        <button type="button" onClick={playNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
