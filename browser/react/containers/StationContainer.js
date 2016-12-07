import {connect} from 'react-redux';
import Station from '../components/Station';
import { convertSong } from '../utils';
import { toggleSong } from '../action-creators/player';

function convertSongsToStation(songs, genreName) {
    // console.log("inside Station Container", songs, genreName)
    return songs.filter((song) => {
        return song.genre === genreName;
    }).map(convertSong);
}

const mapStateToProps = function(state, ownProps) {
    // console.log("ownProps", ownProps);
    return {
        genreName: ownProps.params.genreName,
        songs: convertSongsToStation(state.songs, ownProps.params.genreName),
        currentSong: state.player.currentSong,
        isPlaying: state.player.isPlaying
    };
};

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleOne: (song, list) => {
            dispatch(toggleSong(song, list));
        }
    };
};

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);
export default StationContainer;
