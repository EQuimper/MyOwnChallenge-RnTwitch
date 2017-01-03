import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import { Components } from 'exponent';
import { Actions } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome } from '@exponent/vector-icons';
import { NoFollowYet } from '../../../components';

const colors = ['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.7)'];

const GamesList = ({ games, checkLiked, toggleLiked }) => {
  const _handleDelete = game => {
    LayoutAnimation.easeInEaseOut();
    return toggleLiked(game.name);
  };
  const _goToGames = game => {
    return Actions.gameStreams({
      game: game.name,
      image: game.image,
      title: game.name,
      liked: checkLiked(game.name)
    });
  };
  return (
    <View style={{ flex: 2 }}>
      {games.length > 0 ? (
        <ScrollView horizontal pagingEnabled>
          {games.map((game, i) => (
            <View style={styles.imageContainer} key={i}>
              <Image source={{ uri: game.image }} style={styles.image} />
              <Components.LinearGradient
                colors={colors}
                style={styles.imageContainerOverlays}
              >
                <TouchableOpacity
                  style={styles.overlaysIcon}
                  onPress={() => _goToGames(game)}
                >
                  <FontAwesome name="eye" color="white" size={40} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.overlaysIcon}
                  onPress={() => _handleDelete(game)}
                >
                  <FontAwesome name={checkLiked(game.name)} color="white" size={40} />
                </TouchableOpacity>
              </Components.LinearGradient>
            </View>
          ))}
        </ScrollView>
      ) : <NoFollowYet game /> }
    </View>
  );
};

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
      width: 1.5,
      height: 1.5,
    },
    shadowColor: 'black',
    shadowOpacity: 0.9
  },
});

export default GamesList;
