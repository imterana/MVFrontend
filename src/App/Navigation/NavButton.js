import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';

/**
 * A custom stylable button component with arbitrary content.
 */
export default class NavButton extends Component {
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
    const {onPress} = this.props;
    const buttonStyle = [style.navButton, this.props.style];
    return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  navButton: {
    height: 50,
    flex: 1,
  },
});
