import Reactotron from 'reactotron-react-native';
import { Actions } from 'react-native-router-flux';

export const TOGGLE_SEARCH_GAMES = 'TOGGLE_SEARCH_GAMES';
export const FILTER_GAMES_INPUT = 'FILTER_GAMES_INPUT';

export const filterGamesInput = str => {
  Reactotron.log(str);
  return {
    type: FILTER_GAMES_INPUT,
    str
  };
};

export const toggleSearchGames = () => (dispatch, getState) => {
  const { show } = getState().ui.navBar;
  Actions.refresh({ navBarShow: show });
  return dispatch({ type: TOGGLE_SEARCH_GAMES });
};
