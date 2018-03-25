import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationScreen} from '../Navigation';

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
          <Text>Details Screen</Text>
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
