import React from 'react';
import { Text, View, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Reactotron from 'reactotron-react-native';

const SearchBar = ({ navBarShow, searchGamesInput }) => (
  <View style={styles.root}>
    {navBarShow ? (
      <TextInput
        placeholderTextColor="white"
        selectionColor="white"
        placeholder="Search game..."
        style={styles.input}
        returnKeyType="search"
        onSubmitEditing={event => searchGamesInput(event.nativeEvent.text)}
      />
    ) : (
      <Text style={[styles.titleStyle, { fontSize: 18, alignSelf: 'center', marginTop: 20 }]}>
        Games
      </Text>
    )}
  </View>
);

const styles = EStyleSheet.create({
  root: {
    height: 64,
    justifyContent: 'center'
  },
  titleStyle: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: '3%',
    color: '$whiteColor',
    fontWeight: 'bold'
  },
  input: {
    height: 30,
    marginLeft: '2%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    borderRadius: 10,
    width: '65%',
    color: 'white',
    fontSize: 18,
    marginTop: '3%'
  }
});

export default SearchBar;
