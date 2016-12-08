import React, {Component} from 'react';
import {connect} from 'react-redux';
import AUDIO from '../audio';
import store from '../store';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';

const mapStateToProps = function(state, ownProps) {
  return {
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    toggle: (song, list) => {
      dispatch(toggleSong(song, list));
    },

    next: () => {
      console.log('next', next);
      dispatch(next());
    },

    prev: () => {
      console.log('previous', previous);
      dispatch(previous());
    }
  }
}

const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(Player);

export default PlayerContainer;
