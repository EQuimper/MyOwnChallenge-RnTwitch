import React, { Component } from 'react';
import { Image, View, ListView, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../constants/Colors';
import { FabButton } from '../../components';

class HomeScreen extends Component {
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
    this.setState({ offset: this.state.offset + 10, loading: true }, () => {
      return this.props.paginateGames(this.state.offset + 1);
    });
  }

  _renderRow(row) {
    return (
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => Actions.gameStreams({
          game: row.game.name,
          title: row.game.name,
          liked: false
        })}
      >
        <View style={{ flex: 1 }}>
          <Image source={{ uri: row.game.box.large }} style={[styles.image, { position: 'relative' }]} />
        </View>
      </TouchableOpacity>
    );
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
      <View>
        <ListView
          contentContainerStyle={styles.root}
          renderRow={row => this._renderRow(row)}
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
  imageContainer: {
    width: '45%',
    marginVertical: '1.5%',
    marginHorizontal: '1.5%',
    height: '35%',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.8
  },
  image: {
    flex: 1,
    width: null,
    height: null
  },
  loadingText: {
    color: Colors.tPurple,
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default HomeScreen;
