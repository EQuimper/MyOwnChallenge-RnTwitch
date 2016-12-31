import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Reactotron from 'reactotron-react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome } from '@exponent/vector-icons';

const GameStreamsScreen = ({ streams }) => (
  <View style={styles.root}>
    {Reactotron.log({ streams })}
    <ScrollView>
      {streams.map((stream, i) => (
        <View key={i} style={styles.imageContainer}>
          <Image source={{ uri: stream.preview.large }} style={styles.images} />
        </View>
      ))}
    </ScrollView>
  </View>
);

const styles = EStyleSheet.create({
  root: {
    flex: 1
  },
  imageContainer: {
    height: '33%',
    marginTop: '1.5%',
    marginHorizontal: '1%',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.8
  },
  images: {
    height: null,
    flex: 1,
    width: null,
  }
});

export default GameStreamsScreen;
