import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import BaseButton from './BaseButton';

/**
 * Simple wrapper for BaseButton class, which adds
 * limiting View to it and uses default blue background.
 */
export default class Button extends Component {
  /**
   * @return {React.Node} BaseButton with blue background
   *  and height of 50
   */
  render() {
    return (
      <View style={style.buttonContainer}>
        <BaseButton background='blue' {...this.props} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  buttonContainer: {
    flex: 0,
    height: 50,
  },
});
