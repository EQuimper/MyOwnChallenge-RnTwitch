import { FETCH_GAME_STREAMS, FETCH_OFFSET_STREAMS, RESET_GAME_STREAMS } from './actions';

const INITIAL_STATE = {
  isFetched: false,
  streams: null,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_GAME_STREAMS}_PENDING`:
      return state;
    case `${FETCH_GAME_STREAMS}_FULFILLED`:
      return { ...state,
        isFetched: true,
        streams: action.payload
      };
    case `${FETCH_GAME_STREAMS}_REJECTED`:
      return { ...state,
        isFetched: true,
        error: action.payload
      };
    case `${FETCH_OFFSET_STREAMS}_PENDING`:
      return state;
    case `${FETCH_OFFSET_STREAMS}_FULFILLED`:
      return { ...state,
        isFetched: true,
        streams: [...state.streams, ...action.payload]
      };
    case `${FETCH_OFFSET_STREAMS}_REJECTED`:
      return { ...state,
        isFetched: true,
        error: action.payload
      };
    case RESET_GAME_STREAMS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
