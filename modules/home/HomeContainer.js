import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';
import { fetchTopGames, paginateGames } from './actions';
import { checkLiked } from '../ui';
import { LoadingSpinner } from '../../components';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchTopGames();
  }
  render() {
    const { data, paginateGames, searching, dataSearching, checkLiked } = this.props;

    if (!data.isFetched) {
      return <LoadingSpinner />;
    } else if (!data.error) {
      return (
        <HomeScreen
          checkLiked={checkLiked}
          dataSearching={dataSearching}
          paginateGames={paginateGames}
          games={data.games}
          searching={searching}
        />
      );
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
    data: state.api.games.gamesAll,
    dataSearching: state.api.games.gamesSearch,
    searching: state.ui.navBar.searching
  }),
  { fetchTopGames, paginateGames, checkLiked }
)(HomeContainer);
