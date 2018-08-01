import React, {Component} from 'react';

import {NavigationScreen} from 'Navigation';

import MarkUserMarkSubscreen from '../MarkUserMarkSubscreen';

/**
 * Mark screen.
 */
export default class MarkScreenDemo extends Component {
  /**
   * @return {React.Node} A screen for marking.
   */
  render() {
    return (
      <NavigationScreen>
        <MarkUserMarkSubscreen
          name='Сергей Шнуров'
          photo='https://24smi.org/public/media/235x307/celebrity/2017/02/14/3Qt74hy1XwtW_sergei-shnurov.jpg'
          bio='Певец'
          confirmed={true}
        />
      </NavigationScreen>
    );
  }
}
