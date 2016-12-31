import Reactotron from 'reactotron-react-native';
import config from '../config';

const { CLIENT_ID } = config;

const rootUrl = 'https://api.twitch.tv/kraken';

const fetchData = url => {
  return fetch(`${rootUrl}/${url}client_id=${CLIENT_ID}`).then(res => res.json());
}

export async function getAllGames() {
  let data;
  try {
    data = await fetchData('games/top?');
  } catch (err) {
    console.log(err);
  }
  return data;
};

export async function getOffsetGames(offset) {
  let data;
  try {
    data = await fetchData(`games/top?offset=${offset}&`);
  } catch (err) {
    console.log(err);
  }
  return data;
}

export async function getGameStreams(game) {
  let data;
  try {
    data = await fetchData(`streams/?game=${game}&`);
  } catch (err) {
    console.log(err);
  }
  Reactotron.log({ data });
  return data;
}
