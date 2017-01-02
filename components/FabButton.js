import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import { FontAwesome } from '@exponent/vector-icons';
import Colors from '../constants/Colors';

const FabButton = ({ visible }) => (
  <View>
    {visible && (
      <ActionButton buttonColor={Colors.tPurple}>
        <ActionButton.Item
          buttonColor="red"
          title="Games Follows"
          onPress={() => Actions.gamesFollow()}
        >
          <FontAwesome name="heart" size={20} color="white" />
        </ActionButton.Item>
      </ActionButton>
    )}
  </View>
);

export default FabButton;
