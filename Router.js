import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Animatable from 'react-native-animatable';
import { Platform } from 'react-native';
import { FontAwesome } from '@exponent/vector-icons';
import { HomeContainer, GameStreamsContainer, GamesFollowScreen } from './modules';

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
  }
});

export default () => (
  <Router
    sceneStyle={styles.sceneStyle}
    navigationBarStyle={styles.navBar}
    titleStyle={styles.titleStyle}
    leftButtonIconStyle={styles.leftButton}
  >
    <Scene
      key="home"
      initial
      title="Games"
      component={HomeContainer}
    />
    <Scene
      key="gameStreams"
      renderRightButton={props => (
        <Animatable.View
          animation="fadeInRight"
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <FontAwesome name={props.liked ? 'heart' : 'heart-o'} color="white" size={30} />
        </Animatable.View>
      )}
      component={GameStreamsContainer}
    />
    <Scene
      key="gamesFollow"
      title="Games Followed"
      component={GamesFollowScreen}
    />
  </Router>
);
