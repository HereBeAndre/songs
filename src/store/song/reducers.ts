import types from "./types";
import { GenericAction } from "./actions_d";
import { Song } from "./index_d";
import { State } from "./index_d";

const initialDataState: State = {
  songList: [],
  selectedSong: {
    title: "",
    artist: "",
    duration: "",
  },
};

const reducers = (
  state = initialDataState,
  action: GenericAction<unknown>
): State => {
  switch (action.type) {
    case types.SET_SONG_LIST:
      return { ...state, songList: action.payload as Song[] };
    case types.SET_SELECT_SONG:
      return { ...state, selectedSong: action.payload as Song };
    default:
      return state;
  }
};

export default reducers;
