import React,{ useState, useRef, useEffect} from 'react';
import { TiMediaRewind, TiMediaFastForward } from 'react-icons/ti';
import '../styles/audioplayer.css';
import playlist  from "../data_structures/playlist.js";

function AudioPlayer() {
  let mod = require("./Songs.js");
  let my_playlist = new playlist(mod.songs , 0);

  // useState create source state based on my_playlist.current()
  // useEffect()  <- use this to detect the changes to the playlist.current() item
  return (
    <div>
      <div className="audioPlayerContainer">

        <div className="abovePlayer">
          <TiMediaRewind className="leftArrow"/>
          <div className="currentSong">
            { my_playlist.current().title }
          </div>
          <TiMediaFastForward className="rightArrow"/>

        <div className="audioMiddle">
          <audio controls autoplay>
            <source src={my_playlist.current()} type="audio/mp3"/>
          </audio>
        </div>

        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
