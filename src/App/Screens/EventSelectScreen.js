import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {NavigationScreen} from '../Navigation';
import {InputField, SearchField} from '../Components';

/**
 * Event selection screen.
 */
export default class EventSelectScreen extends Component {
  /**
   * @return {React.Node} A screen with search field and list.
   */
  render() {
    return (
      <NavigationScreen>
        <View style={style.InputFieldContainer}>
          <SearchField />
        </View>
      </NavigationScreen>
    );
  }
}

const style = StyleSheet.create({
  InputFieldContainer: {
    top: 10,
    flex: 0,
    height: 50,
  },
});
