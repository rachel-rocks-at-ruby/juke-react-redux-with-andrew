import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';
import Albums from '../components/Albums';

const mapStateToProps = function(state, ownProps) {
  return {
      albums: state.albums.list
  };
};

const AlbumsContainer = connect(mapStateToProps)(Albums);

export default AlbumsContainer;
