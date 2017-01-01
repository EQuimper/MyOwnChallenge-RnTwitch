import React from 'react';
import { Text, View, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const SearchBar = ({ navBarShow, filterGamesInput }) => (
  <View style={styles.root}>
    {navBarShow ? (
      <TextInput
        placeholderTextColor="white"
        selectionColor="white"
        placeholder="Search game..."
        style={styles.input}
        onChangeText={txt => filterGamesInput(txt)}
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
