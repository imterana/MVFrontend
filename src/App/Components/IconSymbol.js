import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import IconSymbolCodes from './IconSymbolList';

/**
 * A component rendering one of the symbols from IconSymbolList
 * with custom style for the Text component.
 * @class IconSymbol
 */
export default class IconSymbol extends Component {
  static propTypes = {
    /**
     * A style to be passed to the underlying Text component.
     */
    style: PropTypes.object,
    /**
     * A name of the symbol as it appears in IconSymbolList.
     */
    name: PropTypes.string.isRequired,
  }

  static defaultProps = {
    style: {},
  }

  /**
   * @return {React.Node} The component containing a single symbol with
   * the corresponding style.
   */
  render() {
    const {style, name} = this.props;
    const symbolChar = String.fromCharCode(IconSymbolCodes[name]);
    return (
      <Text style={{...style, fontFamily: 'IcoMoon'}}>
        {symbolChar}
      </Text>
    );
  }
}

