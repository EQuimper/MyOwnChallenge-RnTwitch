import React, { Component } from 'react';
import { Components } from 'exponent';
import { View, Text, Dimensions, WebView } from 'react-native';

class LiveStreamContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Components.Video
            style={{ flex: 1 }}
            source={{ uri: 'https://player.twitch.tv/?channel=imaqtpie' }}
            fullscreen={false}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text>Hello</Text>
        </View>
      </View>
    );
  }
}
// <WebView
//             style={{ flex: 1 }}
//             javaScriptEnabled
//             javaScriptEnabledAndroid
//             // source={{ html: `<iframe src="https://player.twitch.tv/?channel=imaqtpie" frameborder="0" allowfullscreen="true" scrolling="no" height="auto" width="100%"></iframe>` }}
//             source={{ uri: 'https://player.twitch.tv/?channel=dinterlolz' }}
//             // source={{ html: `<iframe src="https://player.twitch.tv/?channel=dinterlolz" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe><a href="https://www.twitch.tv/dinterlolz?tt_medium=live_embed&tt_content=text_link" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">Watch live video from 丁特 on www.twitch.tv</a>`}}
//           />

export default LiveStreamContainer;

// <iframe src="https://player.twitch.tv/?channel=imaqtpie" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
