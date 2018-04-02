import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import {NavigationScreen} from '../Navigation';
import {DefaultText} from '../Components/Text';
/**
 * A dummy screen.
 */
export default class DetailsScreen extends Component {
  /**
   * @return {React.Node} A dummy screen.
   */
  render() {
    return (
      <NavigationScreen type='secondary'>
        <View style={style.container}>
          <DefaultText>Details Screen</DefaultText>
        </View>
      </NavigationScreen>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
