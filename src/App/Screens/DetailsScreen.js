import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { NavigationScreen } from '../Navigation';

export default class DetailsScreen extends Component {
  render() {
    return (
      <NavigationScreen type='secondary'>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
      </NavigationScreen>
    );
  }
}
