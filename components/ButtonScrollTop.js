import React from 'react';
import { View } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Entypo } from '@exponent/vector-icons';
import Colors from '../constants/Colors';

const ButtonScrollTop = ({ visible, onPress }) => (
  <View>
    {visible && (
      <ActionButton
        buttonColor={Colors.darkGrey}
        icon={
          <Entypo name="chevron-up" color="white" size={30} />
        }
        onPress={onPress}
      />
    )}
  </View>
);

export default ButtonScrollTop;
