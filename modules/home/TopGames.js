import React, { Component } from 'react';
import {
  View,
  ListView,
  Text,
  ActivityIndicator,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FabButton, GameItem } from '../../components';
import Colors from '../../constants/Colors';

class TopGames extends Component {
  state = {
    dataSource: null,
    offset: 0,
    loading: false
  }

  componentWillMount() {
    const { games } = this.props;

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(games);

    this.setState({ dataSource: this.dataSource });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: false,
      dataSource: this.state.dataSource.cloneWithRows(nextProps.games)
    });
  }

  _onRefresh() {
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

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          contentContainerStyle={styles.root}
          renderRow={row => <GameItem data={row} />}
          enableEmptySections
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          onEndReached={() => this._onRefresh()}
          renderFooter={() => this._renderFooter()}
        />
        <FabButton />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  root: {
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
