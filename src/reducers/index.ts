import { combineReducers } from 'redux';
import { GenericAction } from '../actions_d';
import types from '../types';

const songListReducer = (songList = [], action: GenericAction<unknown>) => {
  switch (action.type) {
    case types.SET_SONG_LIST:
      return action.payload;
    default:
      return songList;
  }
};

const selectedSongReducer = (song = null, action: GenericAction<unknown>) => {
  switch (action.type) {
    case types.SET_SELECT_SONG:
      return action.payload;
    default:
      return song;
  }
};

export default combineReducers({
  songList: songListReducer,
  selectedSong: selectedSongReducer,
});
