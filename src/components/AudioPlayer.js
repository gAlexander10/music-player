import { TiMediaRewind, TiMediaFastForward } from 'react-icons/ti';
import { useState, useEffect } from 'react';
import '../styles/audioplayer.css';
import playlist from '../data_structures/playlist.js';

function AudioPlayer(props) {
  let [songPath, setSongPath] = useState(props.songPath);
  let [songTitle, setSongTitle] = useState(props.songTitle);
  let [songArtist, setSongArtist] = useState(props.songArtist);

  let my_playlist = new playlist(props.playlist);

  let [index, setIndex] = useState(0);
  useEffect(() => {
    if (index > props.playlist.length -1) {
      setIndex(0);
    } else if (index < 0) {
      setIndex(props.playlist.length - 1);
    }
  }, [index]);

  return (
  <div>
    <div className="audioPlayerContainer">
      <div className="abovePlayer">
        <TiMediaRewind className="leftArrow" onClick={() => { 
          console.log(props.playlist);
          setIndex(index - 1);
          console.log(index);
          console.log(props.playlist.at(index).title);
          setSongTitle(props.playlist.at(index).title);
        }} />
          <div className="currentSong">
            { songTitle }
          </div>
        <TiMediaFastForward className="rightArrow" onClick={() => { 
          console.log(props.playlist);
          setIndex(index + 1);
          console.log(index);
          console.log(props.playlist.at(index).title);
          setSongTitle(props.playlist.at(index).title);
        }}/>
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
