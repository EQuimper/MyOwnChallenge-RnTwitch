import Reactotron from 'reactotron-react-native';
import { Actions } from 'react-native-router-flux';
import { getAllGames, getOffsetGames, searchGames } from '../../helpers/api';

export const FETCH_TOP_GAMES = 'FETCH_TOP_GAMES';
export const FETCH_OFFSET_TOP_GAMES = 'FETCH_OFFSET_TOP_GAMES';
export const SEARCH_GAMES_INPUT = 'SEARCH_GAMES_INPUT';

export const fetchTopGames = () => {
  const promise = new Promise((resolve, reject) => {
    return getAllGames()
      .then(
        res => resolve(res.top),
        err => reject(err)
      );
  });

  return {
    type: FETCH_TOP_GAMES,
    payload: promise
  };
};

export const paginateGames = (offset) => {
  const promise = new Promise((resolve, reject) => {
    return getOffsetGames(offset)
      .then(
        res => resolve(res.top),
        err => reject(err)
      );
  });

  return {
    type: FETCH_OFFSET_TOP_GAMES,
    payload: promise
  };
};

export const searchGamesInput = term => {
  // Actions.resultsGame();
  const promise = new Promise((resolve, reject) => {
    return searchGames(term)
      .then(
        res => resolve(res.games),
        err => reject(err)
      );
  });

  return {
    type: SEARCH_GAMES_INPUT,
    payload: promise
  };
};
