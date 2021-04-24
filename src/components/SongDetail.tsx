import { connect } from 'react-redux';
import { Song, State } from '../index_d';

interface SelectedSongProps {
  selectedSong: Song;
}

const SongDetail = ({ selectedSong }: SelectedSongProps) => {
  return (
    <>
      {selectedSong && (
        <div>
          <h4>Title: {selectedSong.title}</h4>
          <h4>Artist: {selectedSong.artist}</h4>
          <h4>Duration: {selectedSong.duration}</h4>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: State) => {
  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
