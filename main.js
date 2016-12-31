import Exponent from 'exponent';
import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import store from './redux/store';
import Router from './Router';
import Colors from './constants/Colors';
import './helpers/ReactotronConfig';

EStyleSheet.build(Colors);

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

Exponent.registerRootComponent(App);
