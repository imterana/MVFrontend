import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

import BaseButton from './BaseButton';

/**
 * Wrapper for BaseButton class, which renders limiting
 * container with row of two buttons (green and red).
 */
export default class ButtonRow extends Component {
  static propTypes = {
    /**
     * Labels for green and red buttons.
     */
    greenLabel: PropTypes.string,
    redLabel: PropTypes.string,
    /**
     * Press handler functions for green and red buttons.
     */
    greenOnPress: PropTypes.func,
    redOnPress: PropTypes.func,
  }

  static defaultProps = {
    greenLabel: '',
    redLabel: '',
    greenOnPress: () => {},
    redOnPress: () => {},
  }

  /**
   * @return {React.Node} row with green and red buttons
   */
  render() {
    const {greenLabel,
           redLabel,
           greenOnPress,
           redOnPress,
           ...other} = this.props;
    return (
      <View style={style.buttonContainer}>
        <View style={style.buttonRow}>
          <BaseButton
            label={greenLabel}
            onPress={greenOnPress}
            background='green'
            {...other} />
          <BaseButton
            label={redLabel}
            onPress={redOnPress}
            background='red'
            {...other} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  buttonContainer: {
    flex: 0,
    height: 50,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
  },
});
