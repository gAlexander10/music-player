import { TiMediaRewind, TiMediaFastForward } from 'react-icons/ti';
import { useState } from 'react';
import '../styles/audioplayer.css';
import playlist from '../data_structures/playlist.js';


let my_playlist = new playlist([], 0);

function AudioPlayer(props) {
  my_playlist.add(props.songTitle);
  let [currentTitle, setCurrentTitle] = useState(my_playlist.current());
  return (
    <div>
      <div className="audioPlayerContainer">
        <div className="abovePlayer">
          <TiMediaRewind className="leftArrow" onClick={() => { my_playlist.prev(); setCurrentTitle(my_playlist.current()); }} />
            <div className="currentSong">
              { currentTitle }
            </div>
          <TiMediaFastForward className="rightArrow" onClick={() => { my_playlist.next(); setCurrentTitle(my_playlist.current()); }}/>

        <div className="audioMiddle">
          <audio controls> 
            <source src={props.songPath} type="audio/mp3"/>
            Your browser does not support the audio element.
          </audio>
        </div>

        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
