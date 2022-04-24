import React,{ useState, useRef, useEffect} from 'react';
import { TiMediaRewind, TiMediaFastForward } from 'react-icons/ti';
import '../styles/audioplayer.css';
import song from '../assets/Test.mp3';
import Playlist from '../data_structures/playlist';

function Previous(){
  // 1. Make the previous song the current song in the linked list -- Playlist.prev
  //Playlist.prev();
  // 2. Push previous Song onto Stack --  Push(id)
  console.log('Previous Button Has been pushed');
}

function Next(){
  // 1. Make the next song the current song in the linked list -- Playlist.next
  //Playlist.next();
  // 2. Push next Song onto Stack --  Push(id)
  console.log('Next Button Has been pushed');
}

function AudioPlayer() {
  return (
    <div>
      <div className="audioPlayerContainer">
        
        <div className="abovePlayer">
          
          <TiMediaRewind onClick={Previous} className="leftArrow"/>

          <div className="currentSong">
          Studio Noir - Our Little Hearts Like Saturn
          </div>

          <TiMediaFastForward onClick={Next} className="rightArrow"/>

        <div className="audioMiddle">
          <audio controls autoPlay>
            <source src={song} type="audio/mp3"/>
          </audio>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;