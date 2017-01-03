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
  },
  list: {
    // marginTop: '5%',
  },
  imageContainer: {
    height: '35%',
    width: '45%',
    // flex: 1,
    marginHorizontal: '1.5%',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.8
  },
  imageContainerOverlays: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '35%',
    width: '45%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  overlaysIcon: {
    backgroundColor: 'transparent',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.6
  },
  image: {
    flex: 1,
    width: null,
    height: null
  }
});

export default connect(
  state => ({
    games: state.gamesLiked
  }),
  { checkLiked, toggleLiked }
)(FollowsContainer);
