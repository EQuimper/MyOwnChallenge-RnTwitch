import Reactotron from 'reactotron-react-native';
import { getAllGames, getOffsetGames } from '../../helpers/api';

export const FETCH_TOP_GAMES = 'FETCH_TOP_GAMES';
export const FETCH_OFFSET_TOP_GAMES = 'FETCH_OFFSET_TOP_GAMES';

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

export const paginateGames = offset => {
  // Reactotron.log({ offset });
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
