import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../constants/Colors';

const LoadingSpinner = ({ style }) => (
  <View style={[styles.root, style]}>
    {console.log('hello world')}
    <ActivityIndicator size="large" color={Colors.tPurple} />
    <Text style={styles.text}>Loading...</Text>
  </View>
);

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 20,
    color: '$tPurple'
  }
});

export default LoadingSpinner;
