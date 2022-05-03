import React,{ useState, useRef, useEffect} from 'react';
import { TiMediaRewind, TiMediaFastForward } from 'react-icons/ti';
import '../styles/audioplayer.css';
import playlist  from "../data_structures/playlist.js";

function AudioPlayer() {
  let mod = require("./Songs.js");
  let my_playlist = new playlist(mod.songs , 0);

  let [songTitle, setSongTitle] = useState(my_playlist.current().title);
  let [source, setSource] = useState(my_playlist.current().path);
  useEffect( () => {
    setSource(my_playlist.current().path);
    setSongTitle(my_playlist.current().title);
  }, [my_playlist]);

  return (
    <div>
      <div className="audioPlayerContainer">

        <div className="abovePlayer">
          <TiMediaRewind className="leftArrow" onClick={ my_playlist.prev() } />
            <div className="currentSong">
              { songTitle }
            </div>
          <TiMediaFastForward className="rightArrow" onClick={ my_playlist.next() }/>

        <div className="audioMiddle">
          <audio controls autoplay>
            <source src={ source } type="audio/mp3"/>
          </audio>
        </div>

        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
