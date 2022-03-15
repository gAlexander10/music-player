import React,{ useStatem, useRef, useEffect} from 'react';
import '../styles/audioplayer.css';
import song from '../assets/Test.mp3';


function AudioPlayer() {
  return (
    <div>
      <div className="audioPlayerContainer">
        
        <div className="audioMiddle">
          
          <audio controls>
            <source src={song} type="audio/mp3"/>
          </audio>

        </div>

      </div>
    </div>
  );
}

export default AudioPlayer;