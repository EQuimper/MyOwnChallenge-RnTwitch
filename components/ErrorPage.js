import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Animatable from 'react-native-animatable';

const ErrorPage = () => (
  <View style={styles.root}>
    <Animatable.Text style={styles.textStyle} animation="rubberBand" iterationCount="infinite">
      Error Happen!!!
    </Animatable.Text>
  </View>
);

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: '$whiteColor',
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export default ErrorPage;
