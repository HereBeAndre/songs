import { GenericAction } from "../actions_d/actions_d";
import { Song } from "../index_d/index_d";
import types from "../types/types";

const setSelectSong = (song: Song): GenericAction<Song> => ({
  type: types.SET_SELECT_SONG,
  payload: song,
});

export default {
  setSelectSong,
};
