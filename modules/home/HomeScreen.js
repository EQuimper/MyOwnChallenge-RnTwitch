import React from 'react';
import { Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Animatable from 'react-native-animatable';
import { LoadingSpinner, ErrorPage } from '../../components';
import { ResultGame, TopGames } from './components';

const HomeScreen = ({ searching, games, paginateGames, dataSearching, checkLiked }) => {
  if (searching) {
    if (!dataSearching.search) {
      return (
        <Animatable.View style={styles.root} animation="fadeInUp" duration={1250}>
          <Text style={styles.textStyle}>
            Search By Games...
          </Text>
        </Animatable.View>
      );
    } else if (!dataSearching.isFetched) {
      return <LoadingSpinner />;
    } else if (!dataSearching.error) {
      return <ResultGame games={dataSearching.games} />;
    }
    return <ErrorPage />;
  }
  return <TopGames games={games} paginateGames={paginateGames} checkLiked={checkLiked} />;
};

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 25
  }
});

export default HomeScreen;
