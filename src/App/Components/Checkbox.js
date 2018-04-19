import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconSymbol from './IconSymbol';
import StyleConstants from '../StyleConstants';

/**
 * Custom checkbox, used in MAV.
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
    value: false,
    onPress: () => {},
  }

  /**
   * @return {React.Node} styled checkbox
   */
  render() {
    /**
     * IconSymbol should be putted to TouchableOpacity.
     * It should change its state (i.e. checked/unchecked) and
     * call this.props.onPress function.
     * You can use ./BaseButton.js as an example of using
     * TouchableOpacity.
     */
    return (
      <IconSymbol
        name='checkbox-checked'
        style={{color: StyleConstants.ALT_BACKGROUND_COLOR}} />
    );
  }
}
