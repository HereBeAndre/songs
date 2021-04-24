import { GenericAction } from "../actions_d/actions_d";
import { Song, State } from "../index_d/index_d";
import types from "../types/types";

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
    case types.SET_SELECT_SONG:
      return { ...state, selectedSong: action.payload as Song };
    default:
      return state;
  }
};

export default reducers;
