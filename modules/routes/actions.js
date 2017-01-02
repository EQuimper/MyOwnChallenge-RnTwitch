import { Actions } from 'react-native-router-flux';

export const TOGGLE_SEARCH_GAMES = 'TOGGLE_SEARCH_GAMES';
export const FILTER_GAMES_INPUT = 'FILTER_GAMES_INPUT';

export const filterGamesInput = str => ({
  type: FILTER_GAMES_INPUT,
  str
});

export const toggleSearchGames = () => (dispatch, getState) => {
  const { show } = getState().ui.navBar;
  // For reset the input when click cancel
  if (show) {
    dispatch({ type: 'RESET_SEARCH_GAMES_INPUT' });
  }
  // For show the searchBar and the cancel button
  Actions.refresh({ navBarShow: show });
  return dispatch({ type: TOGGLE_SEARCH_GAMES });
};
