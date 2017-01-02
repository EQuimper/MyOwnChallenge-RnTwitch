import React, { Component } from 'react';
import {
  View,
  ListView,
  ActivityIndicator,
  Text,
  RefreshControl,
  LayoutAnimation
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import GameStreamsItem from './GameStreamsItem';
import { FabButton, ButtonScrollTop } from '../../components';
import Colors from '../../constants/Colors';

class GameStreamsScreen extends Component {
  state = {
    dataSource: null,
    offset: 0,
    loading: false,
    isActionButtonVisible: true
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.setState({ dataSource: ds.cloneWithRows(this.props.streams) });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: false,
      dataSource: this.state.dataSource.cloneWithRows(nextProps.streams)
    });
  }

  _listViewOffset = 0

  _renderFooter() {
    return this.state.loading && (
      <View style={{ marginVertical: 20, alignSelf: 'center' }}>
        <ActivityIndicator size="large" color={Colors.tPurple} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  _onEndReached() {
    this.setState({ offset: this.state.offset + 25, loading: true }, () => {
      return this.props.paginateStreams(this.props.game, this.state.offset + 1);
    });
  }

  _onRefresh() {
    this.props.fetchGameStreams(this.props.game, true);
  }

  _onScroll(e) {
      // Simple fade-in / fade-out animation
    const CustomLayoutLinear = {
      duration: 100,
      create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
      update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
      delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
    };
    // Check if the user is scrolling up or down by confronting the new scroll position with your own one
    const currentOffset = e.nativeEvent.contentOffset.y;
    const direction = (currentOffset > 0 && currentOffset > this._listViewOffset)
      ? 'down'
      : 'up';
    // If the user is scrolling down (and the action-button is still visible) hide it
    const isActionButtonVisible = direction === 'up';
    if (isActionButtonVisible !== this.state.isActionButtonVisible) {
      LayoutAnimation.configureNext(CustomLayoutLinear);
      this.setState({ isActionButtonVisible });
    }
    // Update your scroll position
    this._listViewOffset = currentOffset;
  }

  render() {
    return (
      <View style={styles.root}>
        <ListView
          ref={ref => this.streamsList = ref}
          onScroll={e => this._onScroll(e)}
          renderRow={row => <GameStreamsItem stream={row} />}
          enableEmptySections
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          onEndReached={() => this._onEndReached()}
          renderFooter={() => this._renderFooter()}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => this._onRefresh()}
              tintColor={Colors.tPurple}
            />
          }
        />
        <FabButton visible={this.state.isActionButtonVisible} />
        <ButtonScrollTop
          visible={!this.state.isActionButtonVisible}
          onPress={() => this.streamsList.scrollTo({ y: 0 })}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  root: {
    flex: 1
  },
  list: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: '1%'
  },
  loadingText: {
    color: '$tPurple',
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default GameStreamsScreen;
