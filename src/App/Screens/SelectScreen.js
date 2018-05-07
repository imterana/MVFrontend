import React, {Component} from 'react';
import {View} from 'react-native';

import {NavigationScreen} from '../Navigation';
import Select from '../Components/Select';
import {DateSelect, TimeSelect} from '../Components/';

/**
 * Select example screen.
 */
export default class SelectScreen extends Component {
  /**
   * @return {React.Node} screen with select
   */
  render() {
    return (
      <NavigationScreen>
        <View style={{flex: 1, top: 10, alignItems: 'center'}}>
          <DateSelect />
        </View>
        <View style={{flex: 1, top: 10, alignItems: 'center'}}>
          <TimeSelect />
        </View>
        <View style={{flex: 1, top: 10, alignItems: 'center'}}>
          <Select data={['something', 'another', 'yet another']} />
        </View>
      </NavigationScreen>
    );
  }
}
