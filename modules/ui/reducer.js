import { LIKED_GAME, DISLIKED_GAME } from './actions';

export const gamesLikedReducer = (state = [], action) => {
  switch (action.type) {
    case LIKED_GAME:
      return [...state, {
        name: action.name,
        image: action.image
      }];
    case DISLIKED_GAME:
      return state.filter(game => game.name !== action.name);
    default:
      return state;
  }
};
