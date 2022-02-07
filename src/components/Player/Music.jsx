import {useState, useEffect} from 'react';
import Player from './Player';

function App() {

  const [songs] = useState([
    {
      src: "https://pomf2.lain.la/f/wzlex4u.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  
  return (
    <>
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        songs={songs}
      />
    </>
  );
}

export default App;
