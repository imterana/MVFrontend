import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';

/**
 * A custom stylable button component with arbitrary content.
 */
export default class Button extends Component {
  static propTypes = {
    /**
     * Views to be pressable as a button.
     */
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    /**
     * Press handler function.
     */
    onPress: PropTypes.func,
    /**
     * A style to be passed to internal View component.
     */
    style: PropTypes.any,
  }

  static defaultProps = {
    style: null,
  }

  /**
   * @return {React.Node} A styled button component.
   */
  render() {
    const {style, onPress} = this.props;
    if (!style) {
      return <Text>bad</Text>;
    }
    return (
      <TouchableOpacity onPress={onPress} style={style}>
        <View style={style}>
          {this.props.children}
        </View>
      </TouchableOpacity>
    );
  }
}
