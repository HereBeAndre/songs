import { Song, SongList } from "../../data/index_d";
import types from "./types";

const setSongList = (songs: SongList) => ({
  type: types.SET_SONG_LIST,
  payload: songs,
});

const setSelectSong = (song: Song) => ({
  type: types.SET_SELECT_SONG,
  payload: song,
});

// const logout = (): string => ({
//   type: types.LOGOUT;
// })

export default {
  setSongList,
  setSelectSong,
};
