import React from 'react';
import AudioPlayer from '../../components/AudioPlayer';
import AllSongs from './AllSongs';
import RecentlyPlayed from './RecentlyPlayed';
import '../../styles/homestyle.css';
import {Links} from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="container">
        
        <div className="header">
        <h1 className="homeHeader">Music Player</h1>
        </div>
        
        <div className="allSongs">
        <AllSongs />
        </div>

        <div className="recentlyPlayed">
        <RecentlyPlayed />
        </div>

        <div className="footer">
        <AudioPlayer />
        </div>

        <style>{'body { background-color: #100F0F; }'}</style>
      </div>  
    </div>
  );
}

export default Home;