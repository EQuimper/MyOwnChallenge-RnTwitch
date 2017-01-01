import { TOGGLE_SEARCH_GAMES, FILTER_GAMES_INPUT } from './actions';

const INITIAL_STATE = {
  show: true,
  strFilter: null,
  searching: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH_GAMES:
      return {
        strFilter: null,
        searching: !state.searching,
        show: !state.show
      };
    case FILTER_GAMES_INPUT:
      return {
        ...state,
        searching: true,
        strFilter: action.str
      };
    default:
      return state;
  }
};
