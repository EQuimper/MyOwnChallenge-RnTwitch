import React from 'react';
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import { FontAwesome } from '@exponent/vector-icons';
import Colors from '../constants/Colors';

const FabButton = () => (
  <ActionButton buttonColor={Colors.tPurple}>
    <ActionButton.Item
      buttonColor="red"
      title="Games Follows"
      onPress={() => Actions.gamesFollow()}
    >
      <FontAwesome name="heart" color="white" />
    </ActionButton.Item>
  </ActionButton>
);

export default FabButton;
