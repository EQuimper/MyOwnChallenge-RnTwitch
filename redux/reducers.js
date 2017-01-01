import { combineReducers } from 'redux';
import { GamesReducer, GameStreamsReducer, UiNavBarReducer } from '../modules';

const ApiReducer = combineReducers({
  games: GamesReducer,
  gameStreams: GameStreamsReducer
});

const UiReducer = combineReducers({
  navBar: UiNavBarReducer
});

export default combineReducers({
  api: ApiReducer,
  ui: UiReducer
});
