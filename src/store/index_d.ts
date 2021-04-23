import { CombinedState } from "redux";
import { State as SongsState } from "./song/index_d";

export type AppState = {
  songs: SongsState;
};

export type State = CombinedState<AppState>;
