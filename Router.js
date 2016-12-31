import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { HomeContainer } from './modules';

const styles = EStyleSheet.create({
  navBar: {
    backgroundColor: '$tPurple'
  },
  titleStyle: {
    color: '$whiteColor',
    fontWeight: 'bold'
  },
  sceneStyle: {
    paddingTop: 64
  }
});

export default () => (
  <Router
    sceneStyle={styles.sceneStyle}
    navigationBarStyle={styles.navBar}
    titleStyle={styles.titleStyle}
  >
    <Scene
      key="home"
      initial
      title="Games"
      component={HomeContainer}
    />
  </Router>
);
