import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = function(state, ownProps) {
  return {
    selectedPlaylist: state.playlists.selected,
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress,
    toggleOne: state.playlists.toggleOne
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    toggleOne: (song, list) => {
      dispatch(toggleSong(song, list));
    }
  };
}

const PlaylistContainer = connect(mapStateToProps)(Playlist);

export default PlaylistContainer;
