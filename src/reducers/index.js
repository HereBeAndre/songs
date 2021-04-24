import { combineReducers } from 'redux';

const songListReducer = () => {
  return [
    {
      artist: 'Billy Joel',
      title: 'Piano Man',
      duration: '7:00',
    },
    {
      artist: 'The Beatles',
      title: 'Let It Be',
      duration: '6:00',
    },
    {
      artist: 'The Queen & David Bowie',
      title: 'Under Pressure',
      duration: '5:00',
    },
  ];
};

const selectedSongReducer = (song = null, action) => {
  switch (action.type) {
    case 'SET_SELECT_SONG':
      return action.payload;
    default:
      return song;
  }
};

export default combineReducers({
  songList: songListReducer,
  selectedSong: selectedSongReducer,
});
