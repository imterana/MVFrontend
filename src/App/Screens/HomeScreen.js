import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-dom';

import { NavigationScreen } from '../Navigation';

export default class HomeScreen extends Component {
  render() {
    return (
      <NavigationScreen hamburger>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Link to='/details'>details</Link>
          <Link to='/about'>about</Link>
        </View>
      </NavigationScreen>
    );
  }
}

