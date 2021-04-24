export type Song = {
  title: string;
  artist: string;
  duration: string;
};

export type State = {
  songList: Song[];
  selectedSong: Song;
};
