import { createSelector } from 'reselect';
// import Reactotron from 'reactotron-react-native';

const getGames = state => state.api.games.games;

const gameToSearch = state => state.ui.navBar.strFilter;

const getGame = (games, str) => {
  const gameFilt = games.reduce((array, item) => {
    if (!array.includes(item)) {
      array.push(item);
    }
    return array;
  }, []);
  if (!str) { return gameFilt; }
  const matchesFilter = new RegExp(str, 'i');
  return gameFilt.filter(game => matchesFilter.test(game.game.name));
};

export default createSelector(
  getGames,
  gameToSearch,
  getGame
);
