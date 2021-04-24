import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  return (
    <div>
      {selectedSong && (
        <div>
          {selectedSong.title}
          {selectedSong.artist}
          {selectedSong.duration}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
