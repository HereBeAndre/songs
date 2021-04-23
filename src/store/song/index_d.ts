export type Song = {
  title: string;
  artist: string;
  duration: string;
};

// export enum APP_EVENTS {
//   LOGOUT = "LOGOUT",
// }

export type State = {
  songList: Song[];
  selectedSong: Song;
};
