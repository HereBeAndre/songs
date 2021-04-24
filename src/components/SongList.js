import React from 'react';
import { connect } from 'react-redux';
import { setSelectSong } from '../actions';

const SongList = ({ songList, selectedSong }) => {
  const renderList = songList.map((song) => {
    return (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => {
              selectedSong(song);
            }}
          >
            Select
          </button>
        </div>
        <div className="content">
          <h3>{song.title}</h3>
          <h5>{song.artist}</h5>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="ui divided list">{renderList}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { songList: state.songList };
};

export default connect(mapStateToProps, {
  selectedSong: setSelectSong,
})(SongList);
