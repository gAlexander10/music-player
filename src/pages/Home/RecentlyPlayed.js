import React from 'react';
import '../../styles/homestyle.css';

function RecentlyPlayed() {
  return (
    <div className = 'songsContainer'>
        <h1 className="audioListTitleText">Recently Played</h1>
        <div className = 'songsStorageBox'>
          <div className = 'storageBoxText'>No songs have been recently played</div>
        </div>
    </div>
  )
}

export default RecentlyPlayed;