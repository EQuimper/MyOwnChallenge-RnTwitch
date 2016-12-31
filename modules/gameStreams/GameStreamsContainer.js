import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchGameStreams } from './actions';
import GameStreamsScreen from './GameStreamsScreen';
import { LoadingSpinner } from '../../components';

class GameStreamsContainer extends Component {
  componentWillMount() {
    this.props.fetchGameStreams(this.props.game);
  }
  render() {
    const { data } = this.props;
    if (!data.isFetched) {
      return <LoadingSpinner />;
    } else if (!data.error) {
      return <GameStreamsScreen streams={data.streams} />;
    }
    return (
      <View>
        <Text>Error!!!</Text>
      </View>
    );
  }
}

export default connect(
  state => ({
    data: state.api.gameStreams
  }),
  { fetchGameStreams }
)(GameStreamsContainer);
