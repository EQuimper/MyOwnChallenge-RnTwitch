import { Actions } from 'react-native-router-flux';

export const LIKED_GAME = 'LIKED_GAME';
export const DISLIKED_GAME = 'DISLIKED_GAME';

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
  console.log({ name, image });
  Actions.refresh({ liked: 'heart' });
  return { type: LIKED_GAME, name, image };
};

const dislikedGame = name => {
  Actions.refresh({ liked: 'heart-o' });
  return { type: DISLIKED_GAME, name };
};
