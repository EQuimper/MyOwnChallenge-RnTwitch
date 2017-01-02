import { Actions } from 'react-native-router-flux';
import Reactotron from 'reactotron-react-native';
import { getGameStreams, getGameStreamsOffset } from '../../helpers/api';

export const FETCH_GAME_STREAMS = 'FETCH_GAME_STREAMS';
export const RESET_GAME_STREAMS = 'RESET_GAME_STREAMS';
export const FETCH_OFFSET_STREAMS = 'FETCH_OFFSET_STREAMS';

export const resetGameStreams = () => {
  Actions.pop({ type: 'reset' });
  return { type: RESET_GAME_STREAMS };
};

export const fetchGameStreams = (game, reset) => dispatch => {
  if (reset) {
    dispatch({ type: RESET_GAME_STREAMS });
  }

  const promise = new Promise((resolve, reject) => {
    return getGameStreams(game)
      .then(
        res => resolve(res.streams),
        err => reject(err)
      );
  });

  return dispatch({
    type: FETCH_GAME_STREAMS,
    payload: promise
  });
};

export const paginateStreams = (game, offset) => {
  Reactotron.log('HELLLO');
  Reactotron.log({ game, offset });
  const promise = new Promise((resolve, reject) => {
    return getGameStreamsOffset(game, offset)
      .then(
        res => resolve(res.streams),
        err => reject(err)
      );
  });

  return {
    type: FETCH_OFFSET_STREAMS,
    payload: promise
  };
};
