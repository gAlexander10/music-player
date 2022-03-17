import React from 'react';
import '../../styles/homestyle.css'

function AllSongs() {
  return (
    <div className = 'songsContainer'>
        <h1 className="audioListTitleText">All Songs</h1>
        <div className = 'songsStorageBox'>
          <div className = 'storageBoxText'>Artist - Song Title</div>
        </div>
    </div>
  )
}

export default AllSongs;