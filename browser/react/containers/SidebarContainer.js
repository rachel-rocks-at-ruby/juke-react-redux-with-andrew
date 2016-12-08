import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';
import Sidebar from '../components/Sidebar';

const mapStateToProps = function(state, ownProps) {
  return { playlists: state.playlists }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
