import { Actions } from 'react-native-router-flux';

export const LIKED_GAME = 'LIKED_GAME';
export const DISLIKED_GAME = 'DISLIKED_GAME';

export const LIKED_CHANNEL = 'LIKED_CHANNEL';
export const DISLIKED_CHANNEL = 'DISLIKED_CHANNEL';

export const checkLiked = name => (dispatch, getState) => {
  const gamesLiked = getState().gamesLiked;
  const filterArr = gamesLiked.filter(game => game.name === name);
  if (filterArr.length > 0) { return 'heart'; }
  return 'heart-o';
};

export const toggleLiked = (name, image) => (dispatch, getState) => {
  const gamesLiked = getState().gamesLiked;
  const filterArr = gamesLiked.filter(game => game.name === name);
  if (filterArr.length > 0) {
    return dispatch(dislikedGame(name));
  }
  return dispatch(likedGame(name, image));
};

const likedGame = (name, image) => {
  Actions.refresh({ liked: 'heart' });
  return { type: LIKED_GAME, name, image };
};

const dislikedGame = name => {
  Actions.refresh({ liked: 'heart-o' });
  return { type: DISLIKED_GAME, name };
};

export const checkLikedChannel = name => (dispatch, getState) => {
  const channelsLiked = getState().channelsLiked;
  const filterArr = channelsLiked.filter(game => game.name === name);
  if (filterArr.length > 0) { return 'heart'; }
  return 'heart-o';
};

export const toggleLikedChannel = obj => (dispatch, getState) => {
  const channelsLiked = getState().channelsLiked;
  const filterArr = channelsLiked.filter(game => game.name === obj.name);
  if (filterArr.length > 0) {
    return dispatch(dislikedChannel(obj.name));
  }
  return dispatch(likedChannel(obj));
};

const likedChannel = obj => {
  Actions.refresh({ liked: 'heart' });
  return { type: LIKED_CHANNEL, obj };
};

const dislikedChannel = name => {
  Actions.refresh({ liked: 'heart-o' });
  return { type: DISLIKED_CHANNEL, name };
};
