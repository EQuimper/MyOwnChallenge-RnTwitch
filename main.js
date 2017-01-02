import Exponent from 'exponent';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import EStyleSheet from 'react-native-extended-stylesheet';
import store from './redux/store';
import Routes from './Routes';
import Colors from './constants/Colors';
import { LoadingSpinner } from './components';
import './helpers/ReactotronConfig';

EStyleSheet.build(Colors);

class App extends Component {
  state = { rehydrated: false }
  componentWillMount() {
    persistStore(store, {
      storage: AsyncStorage,
      whitelist: ['channelsLiked', 'gamesLiked'],
      debounce: 500
    }, () => this.setState({ rehydrated: true }));
  }
  render() {
    if (!this.state.rehydrated) { return <LoadingSpinner />; }
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

Exponent.registerRootComponent(App);
