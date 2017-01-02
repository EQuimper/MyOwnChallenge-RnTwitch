import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGameStreams, paginateStreams } from './actions';
import GameStreamsScreen from './GameStreamsScreen';
import { LoadingSpinner, ErrorPage } from '../../components';
import Reactotron from 'reactotron-react-native';

class GameStreamsContainer extends Component {
  componentWillMount() {
    this.props.fetchGameStreams(this.props.game);
  }
  render() {
    const { data, paginateStreams, game, fetchGameStreams } = this.props;
    if (!data.isFetched) {
      return <LoadingSpinner />;
    } else if (!data.error) {
      Reactotron.log(data.streams);
      return (
        <GameStreamsScreen
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
  { fetchGameStreams, paginateStreams }
)(GameStreamsContainer);
