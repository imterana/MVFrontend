import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import {NavigationScreen} from '../Navigation';
import {InputField} from '../Components';

/**
 * InputField example screen.
 * Made only to demonstrate button.
 */
export default class InputFieldScreen extends Component {
  /**
   * @return {React.Node} A screen with button.
   */
  render() {
    return (
      <NavigationScreen>
        <View style={style.InputFieldContainer}>
          <InputField />
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
