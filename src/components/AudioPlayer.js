import { TiMediaRewind, TiMediaFastForward } from 'react-icons/ti';
import '../styles/audioplayer.css';


function AudioPlayer(props) {
  return (
    <div>
      <div className="audioPlayerContainer">
        <div className="abovePlayer">
          <TiMediaRewind className="leftArrow" onClick={() => { console.log("my_playlist.prev()"); }} />
            <div className="currentSong">
              { props.songTitle }
            </div>
          <TiMediaFastForward className="rightArrow" onClick={() => { console.log("my_playlist.next()"); }}/>

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
