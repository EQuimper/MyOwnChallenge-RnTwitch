import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; // eslint-disable-line
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';

const middleware = [
  thunk,
  logger(),
  promiseMiddleware()
];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

export default store;
