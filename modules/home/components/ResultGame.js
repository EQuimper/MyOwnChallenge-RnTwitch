import React from 'react';
import { View, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Animatable from 'react-native-animatable';
import { GameItem, FabButton } from '../../../components';

const ResultGame = ({ games }) => (
  <View style={{ flex: 1 }}>
    {console.log({ games })}
    {games.length > 0 ? (
      <ScrollView contentContainerStyle={styles.root}>
        {games.map((data, i) => <GameItem key={i} data={data} search />)}
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
    <FabButton />
  </View>
);

const styles = EStyleSheet.create({
  root: {
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
