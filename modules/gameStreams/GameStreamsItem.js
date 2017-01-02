import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@exponent/vector-icons';
import { Components } from 'exponent';
import { truncateText, numberWithComma } from '../../helpers';
import Colors from '../../constants/Colors';

const GameStreamsItem = ({ stream }) => (
  <TouchableOpacity
    onPress={() => Actions.liveStream({
      title: stream.channel.display_name,
      name: stream.channel.name
    })}
  >
    <Animatable.View animation="bounceInDown" duration={2000}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: stream.preview.large }} style={styles.images} />
      </View>
      <Components.LinearGradient
        colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.7)', 'rgba(0,0,0,0.4)']}
        style={styles.meta}
      >
        <View style={styles.leftMeta}>
          <Text style={styles.channelName}>{stream.channel.display_name}</Text>
          <Text style={styles.status}>{truncateText(stream.channel.status, 20)}</Text>
        </View>
        <View style={styles.viewersContainer}>
          <Ionicons size={20} name="ios-people" color={Colors.tPurpleLight} />
          <Text style={styles.viewers}>
            {numberWithComma(stream.viewers)}
          </Text>
        </View>
      </Components.LinearGradient>
    </Animatable.View>
  </TouchableOpacity>
);

const styles = EStyleSheet.create({
  imageContainer: {
    height: '33%',
    marginTop: '1.5%',
    marginHorizontal: '1%',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.8,
    position: 'relative'
  },
  images: {
    height: null,
    flex: 1,
    width: null,
  },
  meta: {
    zIndex: 1,
    position: 'absolute',
    marginTop: '1.5%',
    marginHorizontal: '1%',
    height: '8%',
    left: 0,
    top: 0,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    width: '98%',
    flexDirection: 'row',
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

export default GameStreamsItem;
