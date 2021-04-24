import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  return (
    <>
      {selectedSong && (
        <div>
          <h4>Title: {selectedSong.title}</h4>
          <h4>Artist: {selectedSong.artist}</h4>
          <h4>Duration: {selectedSong.duration}</h4>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
