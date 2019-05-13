import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({selectedSong}) => { 
  if(!selectedSong){
    return <div>Select a song</div>
  }
  else{
    return (
      <div className="wrappe">
        <h3>{selectedSong.title}</h3>
        <div>Duration: {selectedSong.duration}</div>
      </div>
    );
  }
}

const mapStateToProps = ({selectedSong})=> {
  return { selectedSong }
}

export default connect(mapStateToProps)(SongDetails);