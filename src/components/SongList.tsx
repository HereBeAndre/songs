import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSelectSong, setSongList } from '../actions';
import { State } from '../index_d';

import { data as songs } from '../data/data';

const SongList = ({ songList, setSongList, setSelectSong }: any) => {
  useEffect(() => {
    setSongList(songs);
  }, []);

  const renderList = songList.map((song: any) => {
    return (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => {
              setSelectSong(song);
            }}
          >
            Select
          </button>
        </div>
        <div className="content">
          <h3>{song.title}</h3>
          <h5>{song.artist}</h5>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="ui divided list">{renderList}</div>
    </>
  );
};

const mapStateToProps = (state: State) => {
  return { songList: state.songList };
};

export default connect(mapStateToProps, {
  setSongList,
  setSelectSong,
})(SongList);
