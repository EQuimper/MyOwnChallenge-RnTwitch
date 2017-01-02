import React, { Component } from 'react';
import {
  View,
  ListView,
  Text,
  ActivityIndicator,
  LayoutAnimation
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FabButton, GameItem, ButtonScrollTop } from '../../../components';
import Colors from '../../../constants/Colors';

class TopGames extends Component {
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

    this.setState({
      dataSource: ds.cloneWithRows(this.props.games)
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: false,
      dataSource: this.state.dataSource.cloneWithRows(nextProps.games)
    });
  }

  _listViewOffset = 0

  _onEndReached() {
    if (this.props.strFilter) { return; }
    this.setState({ offset: this.state.offset + 10, loading: true }, () => {
      return this.props.paginateGames(this.state.offset + 1);
    });
  }

  // FIXME: Problem cannot import the component LoadingSpinner here
  _renderFooter() {
    return this.state.loading && (
      <View style={{ marginVertical: 20 }}>
        <ActivityIndicator size="large" color={Colors.tPurple} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
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

  // TODO: REFRESH CONTROL FOR RELOAD DATA
  render() {
    console.log(this.props);
    return (
      <View style={styles.root}>
        <ListView
          ref={ref => this.gamesList = ref}
          onScroll={e => this._onScroll(e)}
          contentContainerStyle={styles.list}
          renderRow={row => <GameItem data={row} checkLiked={this.props.checkLiked} />}
          enableEmptySections
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          onEndReached={() => this._onEndReached()}
          renderFooter={() => this._renderFooter()}
        />
        <FabButton visible={this.state.isActionButtonVisible} />
        <ButtonScrollTop
          visible={!this.state.isActionButtonVisible}
          onPress={() => this.gamesList.scrollTo({ y: 0 })}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  root: { flex: 1 },
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

export default TopGames;
