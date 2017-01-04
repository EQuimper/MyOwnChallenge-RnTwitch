import config from '../config';

const rootUrl = 'https://api.twitch.tv/kraken';

const fetchData = url =>
  fetch(`${rootUrl}/${url}client_id=${config.CLIENT_ID}`).then(res => res.json());

export async function getAllGames() {
  let data;
  try {
    data = await fetchData('games/top?');
  } catch (err) {
    console.log(err);
  }
  return data;
}

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
  return data;
}

export async function getGameStreamsOffset(game, offset) {
  let data;
  try {
    data = await fetchData(`streams/?game=${game}&offset=${offset}&`);
  } catch (err) {
    console.log(err);
  }
  return data;
}

export async function searchGames(term) {
  let data;
  try {
    data = await fetchData(
      `search/games?type=suggest&live=true&query=${term.toLowerCase().trim()}&`
    );
  } catch (err) {
    console.log(err);
  }
  return data;
}
