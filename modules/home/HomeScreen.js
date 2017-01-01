import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import TopGames from './TopGames';
import { GameItem, LoadingSpinner } from '../../components';

const ResultGame = ({ games }) => (
  <View>
    {console.log({ games })}
    <ScrollView>
      {games.map((data, i) => <GameItem key={i} data={data} search />)}
    </ScrollView>
  </View>
);

const HomeScreen = ({ searching, games, paginateGames, dataSearching }) => {
  if (searching) {
    console.log({ dataSearching });
    if (!dataSearching.search) {
      return (
        <View><Text>Nothing Search</Text></View>
      );
    } else if (!dataSearching.isFetched) {
      return <LoadingSpinner />;
    } else if (!dataSearching.error) {
      return <ResultGame games={dataSearching.games} />;
    }
    return (
      <View>
        <Text>Error!!!</Text>
      </View>
    );
  }
  return <TopGames games={games} paginateGames={paginateGames} />;
};

export default HomeScreen;
