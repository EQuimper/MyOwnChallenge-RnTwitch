import { combineReducers } from 'redux';
import {
  GamesReducer,
  GameStreamsReducer,
  UiNavBarReducer,
  gamesLikedReducer
} from '../modules';

const ApiReducer = combineReducers({
  games: GamesReducer,
  gameStreams: GameStreamsReducer
});

const UiReducer = combineReducers({
  navBar: UiNavBarReducer,
});

export default combineReducers({
  gamesLiked: gamesLikedReducer,
  channelsLiked: () => [],
  api: ApiReducer,
  ui: UiReducer
});
