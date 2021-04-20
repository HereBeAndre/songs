import types from "./types";

const selectSong = (song) => ({
  type: types.SELECT_SONG,
  payload: song,
});

export default {
  selectSong,
};
