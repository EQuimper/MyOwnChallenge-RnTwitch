import React from 'react';
import { ScrollView, Image, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const images = [
  // 'league_of_legends',
  'overwatch',
  'dota2',
  'h1z1',
  'heartstone',
  'counter_strike'
];

const HomeView = () => (
  <ScrollView>
    <View style={styles.root}>
      {images.map((image, i) => (
        <View key={i} style={styles.imageContainer}>
          <Image source={require('../assets/images/league_of_legends.jpg')} style={styles.image} />
        </View>
      ))}
    </View>
  </ScrollView>
);

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: '1%'
  },
  imageContainer: {
    width: '45%',
    marginVertical: '1.5%',
    marginHorizontal: '1.5%',
    height: '35%',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.8
  },
  image: {
    flex: 1,
    width: null,
    height: null
  }
});

export default HomeView;
