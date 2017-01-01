import React from 'react';
import * as Animatable from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';
import { Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const GameItem = ({ data, search }) => (
  <TouchableOpacity
    style={styles.imageContainer}
    onPress={() => Actions.gameStreams({
      game: search ? data.name : data.game.name,
      title: search ? data.name : data.game.name,
      liked: false
    })}
  >
    <Animatable.View style={{ flex: 1 }} animation="fadeIn" duration={1500}>
      <Image
        source={{ uri: search ? data.box.large : data.game.box.large }}
        style={styles.image}
      />
    </Animatable.View>
  </TouchableOpacity>
);

const styles = EStyleSheet.create({
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
  },
});

export default GameItem;
