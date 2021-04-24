import { combineReducers } from 'redux';

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
      title: 'Under Pressure',
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
