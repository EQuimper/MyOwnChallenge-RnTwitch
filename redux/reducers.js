import { combineReducers } from 'redux';
import { GamesReducer, GameStreamsReducer } from '../modules';

const ApiReducer = combineReducers({
  games: GamesReducer,
  gameStreams: GameStreamsReducer
});

export default combineReducers({
  api: ApiReducer
});
