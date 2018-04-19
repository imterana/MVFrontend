import React, {Component} from 'react';

import {NavigationScreen} from '../Navigation';
import {Checkbox} from '../Components';

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
        <Checkbox />
      </NavigationScreen>
    );
  }
}
