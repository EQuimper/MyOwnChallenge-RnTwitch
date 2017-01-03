import { LIKED_GAME, DISLIKED_GAME, LIKED_CHANNEL, DISLIKED_CHANNEL } from './actions';

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

export const channelsLikedReducer = (state = [], action) => {
  switch (action.type) {
    case LIKED_CHANNEL:
      return [...state, action.obj];
    case DISLIKED_CHANNEL:
      return state.filter(game => game.name !== action.name);
    default:
      return state;
  }
};
