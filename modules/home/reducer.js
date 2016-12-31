import { FETCH_TOP_GAMES, FETCH_OFFSET_TOP_GAMES } from './actions';

const INITIAL_STATE = {
  isFetched: false,
  games: null,
  error: null
};

export default (state = INITIAL_STATE, action) => {
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
    default:
      return state;
  }
};
