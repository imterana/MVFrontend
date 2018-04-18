import React, {Component} from 'react';

import {NavigationScreen} from '../Navigation';
import {KarmaCircle} from '../Components';

/**
 * KarmaCircle example screen.
 */
export default class KarmaCircleScreen extends Component {
  /**
   * @return {React.Node} A screen with KarmaCircle
   */
  render() {
    return (
      <NavigationScreen>
        <KarmaCircle value={250} />
      </NavigationScreen>
    );
  }
}
