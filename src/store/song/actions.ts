import types from "./types";
import { Song } from "./index_d";
import { GenericAction } from "./actions_d";

const setSongList = (songs: Song[]): GenericAction<Song[]> => ({
  type: types.SET_SONG_LIST,
  payload: songs,
});

const setSelectSong = (song: Song): GenericAction<Song> => ({
  type: types.SET_SELECT_SONG,
  payload: song,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setSongList,
  setSelectSong,
};
