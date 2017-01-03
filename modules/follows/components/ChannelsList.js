import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Ionicons, FontAwesome } from '@exponent/vector-icons';
import { Components } from 'exponent';
import { Actions } from 'react-native-router-flux';
import { truncateText, numberWithComma } from '../../../helpers';
import Colors from '../../../constants/Colors';
import { NoFollowYet } from '../../../components';

const colors = ['rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.9)'];

const ChannelsList = ({ channels, toggleLikedChannel, checkLikedChannel }) => {
  const _handleGo = channel => {
    Actions.liveStream({
      title: channel.display_name,
      name: channel.name,
      liked: checkLikedChannel(channel.name),
      game: {
        name: channel.name,
        viewers: channel.viewers,
        status: channel.status,
        image: channel.image,
        display_name: channel.display_name
      }
    });
  };
  const _disliked = channel => {
    LayoutAnimation.easeInEaseOut();
    toggleLikedChannel(channel);
  };
  return (
    <View style={styles.root}>
      {channels.length > 0 ? (
        <ScrollView horizontal pagingEnabled>
          {channels.map((channel, i) => (
            <View key={i} style={styles.imageContainer}>
              <Image source={{ uri: channel.image }} style={styles.image} />
              <Components.LinearGradient
                colors={colors}
                style={styles.overlayContainer}
              >
                <View style={styles.innerOverlay}>
                  <View style={styles.meta}>
                    <View style={styles.leftMeta}>
                      <Text style={styles.channelName}>{channel.display_name}</Text>
                      <Text style={styles.status}>{truncateText(channel.status, 20)}</Text>
                    </View>
                    <View style={styles.viewersContainer}>
                      <Ionicons size={20} name="ios-people" color={Colors.tPurpleLight} />
                      <Text style={styles.viewers}>
                        {numberWithComma(channel.viewers)}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.iconContainerOverlay}>
                    <TouchableOpacity style={styles.iconOverlay} onPress={() => _handleGo(channel)}>
                      <FontAwesome name="eye" color="white" size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconOverlay} onPress={() => _disliked(channel)}>
                      <FontAwesome name="heart" color="white" size={40} />
                    </TouchableOpacity>
                  </View>
                </View>
              </Components.LinearGradient>
            </View>
          ))}
        </ScrollView>
      ): <NoFollowYet /> }
    </View>
  );
};

const styles = EStyleSheet.create({
  root: {
    flex: 2
  },
  overlayContainer: {
    height: '35%',
    width: '95%',
    top: 0,
    left: 0,
    position: 'absolute'
  },
  imageContainer: {
    height: '35%',
    width: '95%',
    marginHorizontal: '1%',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.8,
    position: 'relative'
  },
  image: {
    height: null,
    flex: 1,
    width: null,
  },
  iconContainerOverlay: {
    flex: 2,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconOverlay: {
    backgroundColor: 'transparent',
    shadowOffset: {
      width: 1.5,
      height: 1.5,
    },
    shadowColor: 'black',
    shadowOpacity: 0.9
  },
  innerOverlay: {
    flex: 1,
    position: 'relative'
  },
  meta: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 0.7,
    position: 'relative'
  },
  leftMeta: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    flex: 3,
    paddingLeft: '2.5%'
  },
  channelName: {
    color: '$whiteColor',
    fontWeight: '600',
    fontSize: 18
  },
  status: {
    color: '$tPurpleLight',
    fontSize: 10,
    fontWeight: '600',
  },
  viewersContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  viewers: {
    fontWeight: '600',
    fontSize: 14,
    color: '$tPurpleLight'
  }
});

export default ChannelsList;
