import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGameStreams, paginateStreams } from './actions';
import { checkLikedChannel } from '../ui';
import GameStreamsScreen from './GameStreamsScreen';
import { LoadingSpinner, ErrorPage } from '../../components';

class GameStreamsContainer extends Component {
  componentWillMount() {
    this.props.fetchGameStreams(this.props.game);
  }
  render() {
    const { data, paginateStreams, game, fetchGameStreams, checkLikedChannel } = this.props;
    if (!data.isFetched) {
      return <LoadingSpinner />;
    } else if (!data.error) {
      return (
        <GameStreamsScreen
          checkLikedChannel={checkLikedChannel}
          game={game}
          fetchGameStreams={fetchGameStreams}
          streams={data.streams}
          paginateStreams={paginateStreams}
        />
      );
    }
    return <ErrorPage />;
  }
}

export default connect(
  state => ({
    data: state.api.gameStreams
  }),
  { fetchGameStreams, paginateStreams, checkLikedChannel }
)(GameStreamsContainer);
