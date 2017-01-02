import React from 'react';
import { View, WebView } from 'react-native';

const LiveStreamContainer = ({ name }) => (
  <View style={{ flex: 1 }}>
    <WebView
      style={{ flex: 1 }}
      javaScriptEnabled
      source={{ uri: `https://player.twitch.tv/?channel=${name}` }}
    />
  </View>
);

export default LiveStreamContainer;
