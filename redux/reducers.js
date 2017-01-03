import { combineReducers } from 'redux';
import {
  GamesReducer,
  GameStreamsReducer,
  UiNavBarReducer,
  gamesLikedReducer,
  channelsLikedReducer
} from '../modules';

const ApiReducer = combineReducers({
  games: GamesReducer,
  gameStreams: GameStreamsReducer
});

const UiReducer = combineReducers({
  navBar: UiNavBarReducer
});

export default combineReducers({
  gamesLiked: gamesLikedReducer,
  channelsLiked: channelsLikedReducer,
  api: ApiReducer,
  ui: UiReducer
});
