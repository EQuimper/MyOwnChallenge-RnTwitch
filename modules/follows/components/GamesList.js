import React from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Components } from 'exponent';
import { Actions } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome } from '@exponent/vector-icons';

const colors = ['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.7)'];

const GamesList = ({ games, checkLiked, toggleLiked }) => (
  <View style={{ flex: 2 }}>
    <ScrollView horizontal>
      {games.map((game, i) => (
        <View style={styles.imageContainer} key={i}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <Components.LinearGradient
            colors={colors}
            style={styles.imageContainerOverlays}
          >
            <TouchableOpacity
              style={styles.overlaysIcon}
              onPress={() => Actions.gameStreams({
                game: game.name,
                image: game.image,
                title: game.name,
                liked: checkLiked(game.name)
              })}
            >
              <FontAwesome name="eye" color="white" size={40} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.overlaysIcon}
              onPress={() => toggleLiked(game.name)}
            >
              <FontAwesome name={checkLiked(game.name)} color="white" size={40} />
            </TouchableOpacity>
          </Components.LinearGradient>
        </View>
      ))}
    </ScrollView>
  </View>
);

const styles = EStyleSheet.create({
  imageContainer: {
    height: '35%',
    width: '45%',
    marginHorizontal: '1.5%',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.8
  },
  imageContainerOverlays: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '35%',
    width: '45%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: null,
    height: null
  },
  overlaysIcon: {
    backgroundColor: 'transparent',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.6
  },
});

export default GamesList;
