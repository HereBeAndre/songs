import { Song, SongList } from "../../data/index_d";

export type Songs = {
  songList: SongList;
  selectedSong: Song;
};

// export enum APP_EVENTS {
//   LOGOUT = "LOGOUT",
// }

export type State = {
  songList: SongList;
  selectedSong: Song;
};
