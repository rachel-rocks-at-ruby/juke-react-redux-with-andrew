import {connect} from 'react-redux';
import Stations from '../components/Stations';

const convertSongsToStations = function (songsArray) {
  // return { classical: [songs], hiphop: [songs]}
  const stations = {};
  songsArray.forEach(function(song) {
    if (stations[song.genre]) {
      stations[song.genre].push(song);
    } else {
      stations[song.genre] = [song];
    }
  });
  return stations;
};

const mapStateToProps = function(state) {
  return { 'stations': convertSongsToStations(state.songs)}
};

const mapDispatchToProps = function(dispatch) {
  return {}
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);

export default StationsContainer;
