export type Song = {
  artist: string;
  title: string;
  duration: string;
};

export type State = {
  songList: Song[];
  selectedSong: Song;
};
