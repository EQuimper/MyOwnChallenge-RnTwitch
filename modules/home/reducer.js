import { combineReducers } from 'redux';
import {
  FETCH_TOP_GAMES,
  FETCH_OFFSET_TOP_GAMES,
  RESET_TOP_GAMES,
  SEARCH_GAMES_INPUT
} from './actions';

const INITIAL_STATE = {
  isFetched: false,
  games: null,
  error: null
};

const gamesAll = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_TOP_GAMES}_PENDING`:
      return state;
    case `${FETCH_TOP_GAMES}_FULFILLED`:
      return { ...state,
        isFetched: true,
        games: action.payload
      };
    case `${FETCH_TOP_GAMES}_REJECTED`:
      return { ...state,
        isFetched: true,
        error: action.payload
      };
    case `${FETCH_OFFSET_TOP_GAMES}_PENDING`:
      return state;
    case `${FETCH_OFFSET_TOP_GAMES}_FULFILLED`:
      return { ...state,
        isFetched: true,
        games: [...state.games, ...action.payload]
      };
    case `${FETCH_OFFSET_TOP_GAMES}_REJECTED`:
      return { ...state,
        isFetched: true,
        error: action.payload
      };
    case RESET_TOP_GAMES:
      return INITIAL_STATE;
    default:
      return state;
  }
};

const gamesSearch = (state = { ...INITIAL_STATE, search: false }, action) => {
  switch (action.type) {
    case `${SEARCH_GAMES_INPUT}_PENDING`:
      return { ...state,
        search: true
      };
    case `${SEARCH_GAMES_INPUT}_FULFILLED`:
      return { ...state,
        isFetched: true,
        games: action.payload
      };
    case `${SEARCH_GAMES_INPUT}_REJECTED`:
      return { ...state,
        isFetched: true,
        error: action.payload
      };
    default:
      return state;
  }
};


export default combineReducers({
  gamesAll,
  gamesSearch
});
