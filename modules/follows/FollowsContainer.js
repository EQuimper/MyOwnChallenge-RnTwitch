import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { GamesList } from './components';
import { checkLiked, toggleLiked } from '../ui';

const FollowsContainer = ({ games, checkLiked, toggleLiked }) => (
  <View style={styles.root}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        My Games
      </Text>
    </View>
    <GamesList games={games} checkLiked={checkLiked} toggleLiked={toggleLiked} />
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        My Channels
      </Text>
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        My Channels
      </Text>
    </View>
  </View>
);

const styles = EStyleSheet.create({
  root: {
    flex: 1
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'relative'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default connect(
  state => ({
    games: state.gamesLiked
  }),
  { checkLiked, toggleLiked }
)(FollowsContainer);
