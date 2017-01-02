import React from 'react';
import { connect } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text, Platform, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@exponent/vector-icons';
import {
  HomeContainer,
  GameStreamsContainer,
  GamesFollowScreen,
  LiveStreamScreen,
  toggleSearchGames,
  resetGameStreams,
  searchGamesInput,
  GameResultsContainer,
  toggleLiked
} from './modules';
import { SearchBar } from './components';

const Routes = ({ toggleSearchGames, resetGameStreams, searchGamesInput, toggleLiked }) => (
  <Router
    sceneStyle={styles.sceneStyle}
    navigationBarStyle={styles.navBar}
    titleStyle={styles.titleStyle}
    leftButtonIconStyle={styles.leftButton}
  >
    <Scene
      key="home"
      initial
      titleProps={{ navBarShow: true }}
      title="HelloWorld"
      renderTitle={({ navBarShow }) =>
        <SearchBar navBarShow={navBarShow} searchGamesInput={searchGamesInput} />
      }
      component={HomeContainer}
      renderRightButton={({ navBarShow }) => (
        <TouchableOpacity onPress={() => toggleSearchGames()}>
          <View style={styles.rightButton}>
            {navBarShow ? (
              <Text style={[styles.titleStyle, styles.cancelText]}>Cancel</Text>
            ) : (
              <FontAwesome name="search" color="white" size={20} />
            )}
          </View>
        </TouchableOpacity>
      )}
    />
    <Scene
      onBack={() => resetGameStreams()}
      key="gameStreams"
      renderRightButton={props => (
        <TouchableOpacity onPress={() => toggleLiked(props.game, props.image)}>
          <View style={styles.rightButton}>
            <FontAwesome
              name={props.liked}
              color="white" size={30}
            />
          </View>
        </TouchableOpacity>
      )}
      component={GameStreamsContainer}
    />
    <Scene
      key="liveStream"
      renderRightButton={props => (
        <View style={styles.rightButton}>
          <FontAwesome name={props.liked ? 'heart' : 'heart-o'} color="white" size={30} />
        </View>
      )}
      component={LiveStreamScreen}
    />
    <Scene
      key="resultsGame"
      title="Results"
      component={GameResultsContainer}
    />
    <Scene
      key="gamesFollow"
      title="Games Followed"
      component={GamesFollowScreen}
    />
  </Router>
);

const styles = EStyleSheet.create({
  navBar: {
    backgroundColor: '$tPurple',
  },
  titleStyle: {
    color: '$whiteColor',
    fontWeight: 'bold'
  },
  sceneStyle: {
    paddingTop: Platform.OS === 'ios' ? 64 : 54
  },
  leftButton: {
    tintColor: 'white'
  },
  rightButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelText: {
    fontSize: 16
  }
});

export default connect(
  state => ({
    navBar: state.ui.navBar
  }),
  { toggleSearchGames, resetGameStreams, searchGamesInput, toggleLiked }
)(Routes);
