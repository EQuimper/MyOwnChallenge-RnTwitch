import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; // eslint-disable-line
import promiseMiddleware from 'redux-promise-middleware';
import { autoRehydrate } from 'redux-persist';
import reducers from './reducers';

const middlewares = [
  thunk,
  logger(),
  promiseMiddleware()
];

const enhancers = compose(
  autoRehydrate({ log: true }),
  applyMiddleware(...middlewares)
);

const store = createStore(reducers, undefined, enhancers);

export default store;
