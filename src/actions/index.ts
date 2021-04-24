import { Song } from '../index_d';
import { GenericAction } from '../actions_d';
import types from '../types';

export const setSongList = (songList: Song[]): GenericAction<Song[]> => ({
  type: types.SET_SONG_LIST,
  payload: songList,
});

export const setSelectSong = (song: Song): GenericAction<Song> => ({
  type: types.SET_SELECT_SONG,
  payload: song,
});
