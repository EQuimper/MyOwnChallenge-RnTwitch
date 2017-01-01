import { Actions } from 'react-native-router-flux';
import Reactotron from 'reactotron-react-native';
import { getGameStreams } from '../../helpers/api';

export const FETCH_GAME_STREAMS = 'FETCH_GAME_STREAMS';
export const RESET_GAME_STREAMS = 'RESET_GAME_STREAMS';

export const resetGameStreams = () => {
  Actions.pop({ type: 'reset' });
  return { type: RESET_GAME_STREAMS };
};

export const fetchGameStreams = game => {
  const promise = new Promise((resolve, reject) => {
    return getGameStreams(game)
      .then(
        res => resolve(res.streams),
        err => reject(err)
      );
  });

  return {
    type: FETCH_GAME_STREAMS,
    payload: promise
  };
};
