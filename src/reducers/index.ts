import { combineReducers } from 'redux';
import { GenericAction } from '../actions_d';
import types from '../types';

const songListReducer = () => {
  return [
    {
      artist: 'Billy Joel',
      title: 'Piano Man',
      duration: '5:39',
    },
    {
      artist: 'The Beatles',
      title: 'Hey Jude',
      duration: '8:10',
    },
    {
      artist: 'The Queen & David Bowie',
      title: 'Under Pressure',
      duration: '4:04',
    },
    {
      artist: 'George Baker',
      title: 'Little Green Bag',
      duration: '3:15',
    },
    {
      artist: 'Simon & Garfunkel',
      title: 'Mrs. Robinson',
      duration: '4:04',
    },
    {
      artist: 'Don McLean',
      title: 'American Pie',
      duration: '8:36',
    },
    {
      artist: 'Simon & Garfunkel',
      title: 'The Boxer',
      duration: '5:09',
    },
  ];
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
