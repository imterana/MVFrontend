import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default class Button extends Component {
  static defaultProps = {
    style: null,
  }

  render() {
    const { style, onPress } = this.props;
    if (!style) {
      return <Text>bad</Text>
    }
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={style}>
          {this.props.children}
        </View>
      </TouchableOpacity>
    );
  }
}
