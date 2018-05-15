import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import IconSymbol from './IconSymbol';
import StyleConstants from '../StyleConstants';

/**
 * Custom checkbox.
 */
export default class InputField extends Component {
  static propTypes = {
    /**
     * Defines initial state of checkbox.
     */
    checked: PropTypes.bool,
    /**
     * Custom onPress function.
     */
    onPress: PropTypes.func,
  }

  static defaultProps = {
    checked: false,
    onPress: () => {},
  }

  /**
   * @param {Props} props - the props
   */
  constructor(props) {
    super(props);
    this.state = {checked: props.checked};

    this.toggleChecked = this.toggleChecked.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  /**
   * Changes state.checked.
   */
  toggleChecked() {
    this.setState({pressed: !this.state.pressed});
  }

  /**
   * Press handler.
   * Toggles state.checked and calls callback.
   */
  onPress() {
    this.toggleChecked();
    this.props.onPress();
  }

  /**
   * @return {React.Node} styled checkbox
   */
  render() {
    const icon = this.state.pressed ? 'checkbox-checked' : 'checkbox-unchecked';
    /**
     * Color should be ALT_BACKGROUND_COLOR, when pressed, but
     * otherwise icon should be transparent (or border will be
     * too thick).
     */
    const color = this.state.pressed ?
      StyleConstants.ALT_BACKGROUND_COLOR : 'transparent';
    return (
      <TouchableOpacity onPress={this.onPress}>
      <View style={styles.checkboxContainer}>
        <IconSymbol
          name={icon}
          style={{color: color}} />
      </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  checkboxContainer: {
    borderWidth: 1,
    /**
     * Border radius is 2 so that it repeats
     * shape of the icon.
     */
    borderRadius: 2,
    borderColor: StyleConstants.BORDER_COLOR,
  },
});
