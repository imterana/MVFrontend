import React, { Component } from 'react';
import { Text } from 'react-native';

import IconSymbolCodes from './IconSymbolList';

export default class IconSymbol extends Component {

  static defaultProps = {
    style: {},
  }

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

