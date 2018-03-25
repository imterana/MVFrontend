import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from 'react-router-dom';

import {NavigationScreen} from '../Navigation';

/**
 * A root home screen with links to subpages.
 * @class HomeScreen
 */
export default class HomeScreen extends Component {
  /**
   * @return {React.Node} A screen with subpages.
   */
  render() {
    return (
      <NavigationScreen hamburger>
        <View style={style.container}>
          <Text>Home Screen</Text>
          <Link to='/details'>details</Link>
          <Link to='/about'>about</Link>
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
