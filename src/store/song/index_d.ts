import { CombinedState } from "redux";
import { Song, SongList } from "../../data/index_d";

export type AppState = {
  songList: SongList;
  selectedSong: Song;
};

// export enum APP_EVENTS {
//   LOGOUT = "LOGOUT",
// }

export type State = CombinedState<AppState>;
