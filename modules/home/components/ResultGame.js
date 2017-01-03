import React from 'react';
import { View, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Animatable from 'react-native-animatable';
import { GameItem, FabButton } from '../../../components';

const ResultGame = ({ games, checkLiked }) => (
  <View style={styles.root}>
    {games.length > 0 ? (
      <ScrollView contentContainerStyle={styles.list}>
        {games.map((data, i) =>
          <GameItem key={i} data={data} search checkLiked={checkLiked} />
        )}
      </ScrollView>
    ) : (
      <View style={styles.rootNoResult}>
        <Animatable.Text
          style={styles.textStyle}
          animation="swing"
          duration={1500}
          iterationCount="infinite"
        >
          No Result
        </Animatable.Text>
      </View>
    )}
    <FabButton visible />
  </View>
);

const styles = EStyleSheet.create({
  root: {
    flex: 1
  },
  list: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: '1%'
  },
  rootNoResult: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 25
  }
});

export default ResultGame;
