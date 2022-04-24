import React,{ useState, useRef, useEffect} from 'react';
import { TiMediaRewind, TiMediaFastForward } from 'react-icons/ti';
import '../styles/audioplayer.css';
import song from '../assets/Test.mp3';
import Playlist from '../data_structures/playlist';

function AudioPlayer() {
  return (
    <div>
      <div className="audioPlayerContainer">
        
        <div className="abovePlayer">
          <TiMediaRewind className="leftArrow"/>
          <div className="currentSong">
          Studio Noir - Our Little Hearts Like Saturn
          </div>
          <TiMediaFastForward className="rightArrow"/>
        
        <div className="audioMiddle">
          <audio controls autoplay>
            <source src={song} type="audio/mp3"/>
          </audio>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;