import { combineReducers } from 'redux';
import { GamesReducer } from '../modules';

const ApiReducer = combineReducers({
  games: GamesReducer
});

export default combineReducers({
  api: ApiReducer
});
