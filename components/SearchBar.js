import React from 'react';
import { Text, View, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import EStyleSheet from 'react-native-extended-stylesheet';

const SearchBar = ({ navBarShow, searchGamesInput }) => (
  <View style={styles.root}>
    {navBarShow ? (
      <Animatable.View style={styles.inputContainer} animation="bounceInLeft" duration={1000}>
        <TextInput
          placeholderTextColor="white"
          selectionColor="white"
          placeholder="Search game..."
          style={styles.input}
          returnKeyType="search"
          onSubmitEditing={event => searchGamesInput(event.nativeEvent.text)}
        />
      </Animatable.View>
    ) : (
      <Text style={styles.titleStyle}>
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
    fontWeight: 'bold',
  },
  inputContainer: {
    marginLeft: '2%',
    marginTop: '3%'
  },
  input: {
    height: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    borderRadius: 10,
    width: '65%',
    color: 'white',
    fontSize: 18,
  }
});

export default SearchBar;
