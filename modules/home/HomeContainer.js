import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';
import { fetchTopGames, paginateGames } from './actions';
import { LoadingSpinner } from '../../components';

class HomeContainer extends Component {
  componentWillMount() {
    this.props.fetchTopGames();
  }
  render() {
    const { data } = this.props;

    if (!data.isFetched) {
      return <LoadingSpinner />;
    } else if (!data.error) {
      return <HomeScreen games={data.games} paginateGames={this.props.paginateGames} />;
    }
    return (
      <View>
        <Text>Error...</Text>
      </View>
    );
  }
}

export default connect(
  state => ({
    data: state.api.games
  }),
  { fetchTopGames, paginateGames }
)(HomeContainer);
