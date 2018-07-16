import React, {Component} from 'react';
import {View} from 'react-native';

import {NavigationScreen} from 'Navigation';
import {Checkbox} from 'Components';

/**
 * Checkbox example screen.
 */
export default class CheckboxScreen extends Component {
  /**
   * @return {React.Node} a screen with checkbox
   */
  render() {
    return (
      <NavigationScreen>
        <View style={{alignItems: 'center', top: 10}}>
          <Checkbox />
        </View>
      </NavigationScreen>
    );
  }
}
