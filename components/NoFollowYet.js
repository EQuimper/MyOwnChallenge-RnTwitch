import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions } from 'react-native-router-flux';

const NoFollowYet = ({ game }) => (
  <View style={styles.root}>
    <Text style={styles.title}>No {game ? 'games' : 'channels'} liked yet!</Text>
    <TouchableOpacity onPress={() => Actions.popTo('home')}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Go liked some!</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = EStyleSheet.create({
  root: {
    flex: 0.8,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '$tPurple'
  },
  button: {
    backgroundColor: '$tPurple',
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowOffset: {
      width: 1.5,
      height: 1.5,
    },
    shadowColor: 'black',
    shadowOpacity: 0.9
  },
  buttonText: {
    color: '$whiteColor',
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default NoFollowYet;
