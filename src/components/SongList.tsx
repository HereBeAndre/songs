import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSelectSong, setSongList } from '../actions';
import { State } from '../index_d';

const SongList = ({ setSongList, songList, setSelectSong }: any) => {
  const songs = [
    {
      artist: 'Billy Joel',
      title: 'Piano Man',
      duration: '5:39',
    },
    {
      artist: 'The Beatles',
      title: 'Hey Jude',
      duration: '8:10',
    },
    {
      artist: 'The Queen & David Bowie',
      title: 'Under Pressure',
      duration: '4:04',
    },
    {
      artist: 'George Baker',
      title: 'Little Green Bag',
      duration: '3:15',
    },
    {
      artist: 'Simon & Garfunkel',
      title: 'Mrs. Robinson',
      duration: '4:04',
    },
    {
      artist: 'Don McLean',
      title: 'American Pie',
      duration: '8:36',
    },
    {
      artist: 'Simon & Garfunkel',
      title: 'The Boxer',
      duration: '5:09',
    },
  ];

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
  console.log('STATE', state);
  return { songList: state.songList };
};

export default connect(mapStateToProps, {
  setSongList,
  setSelectSong,
})(SongList);
