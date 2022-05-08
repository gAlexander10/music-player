import { TiMediaRewind, TiMediaFastForward } from 'react-icons/ti';
import { useState, useEffect } from 'react';
import '../styles/audioplayer.css';
import song0 from '../assets/01 Voodoo Suite - Little Grass Shack.mp3';
import song1 from '../assets/02 Ken Hamm - Buckbreak.mp3';
import song2 from '../assets/03 The Trumpeteers - Little Wooden Church.mp3';
import song3 from '../assets/04 Jackson F. Smith - Cantina Rag.mp3';
import song4 from '../assets/05 Studio Noir - Our Little Hearts Like Saturn.mp3';
import song5 from '../assets/06 Teddy and Marge - Dark Eyes.mp3';
import song6 from '../assets/07 HR Jothipala - Ran Eta Pota Ridee Hawadi.mp3';
import song7 from '../assets/08 The Anchorites - Kingsfold(untrad.).mp3';
import song8 from '../assets/09 Ludwigs Steirische Gaudi - Bin hier Zuhause (ID 02).mp3';
import song9 from '../assets/10 Lobo Loco - Old River Boat (ID 1368).mp3';
import song10 from '../assets/11 Xylo-Ziko - peril.mp3';
import song11 from '../assets/12 Crowander - Humbug.mp3';
import song12 from '../assets/13 Marcos H. Bolanos - Rain-Soaked Window.mp3';
import song13 from '../assets/14 Robert John - Surface.mp3';
import song14 from '../assets/15 Monolog Rockstars - At The Restaurant.mp3';

function AudioPlayer(props) {
  let songsList = [
    song0,
    song1,
    song2,
    song3,
    song4,
    song5,
    song6,
    song7,
    song8,
    song9,
    song10,
    song11,
    song12,
    song13,
    song14
  ];

  let [songTitle, setSongTitle] = useState(props.songTitle);

  let [index, setIndex] = useState(0);
  useEffect(() => {
    if (index > props.playlist.length -1) {
      setIndex(0);
    } else if (index < 0) {
      setIndex(props.playlist.length - 1);
    }
  }, [index, props.playlist.length]);

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
          console.log(songsList.at(index));
          console.log(props.playlist.at(index).title);
          setSongTitle(props.playlist.at(index).title);
        }}/>
      <div className="audioMiddle">
        <audio controls> 
          <source src={songsList.at(index)} type="audio/mp3"/>
          Your browser does not support the audio element.
        </audio>
      </div>

      </div>
    </div>
  </div>
  );
}

export default AudioPlayer;
