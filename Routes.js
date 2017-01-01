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
  LiveStreamContainer,
  toggleSearchGames,
  resetGameStreams,
  searchGamesInput,
  GameResultsContainer
} from './modules';
import { SearchBar } from './components';

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

const Routes = ({ toggleSearchGames, resetGameStreams, searchGamesInput }) => (
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
      renderTitle={({ navBarShow }) => <SearchBar navBarShow={navBarShow} searchGamesInput={searchGamesInput} />}
      component={HomeContainer}
      renderRightButton={({ navBarShow }) => (
        <TouchableOpacity onPress={() => toggleSearchGames()}>
          <View style={styles.rightButton}>
            {navBarShow ? (
              <Text style={[styles.titleStyle, styles.cancelText]}>Cancel</Text>
            ) : (
            <FontAwesome name="search" color="#333333" size={25} />
            )}
          </View>
        </TouchableOpacity>
      )}
    />
    <Scene
      onBack={() => resetGameStreams()}
      key="gameStreams"
      renderRightButton={props => (
        <View style={styles.rightButton}>
          <FontAwesome name={props.liked ? 'heart' : 'heart-o'} color="white" size={30} />
        </View>
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
      component={LiveStreamContainer}
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

export default connect(
  state => ({
    navBar: state.ui.navBar
  }),
  { toggleSearchGames, resetGameStreams, searchGamesInput }
)(Routes);
