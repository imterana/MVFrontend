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
     * Target value, which is being changed, when
     * checkbox is being pressed.
     */
    value: PropTypes.bool,
  }

  static defaultProps = {
    value: null,
  }

  /**
   * @return {React.Node} styled checkbox
   */
  render() {
    /**
     * IconSymbol should be putted to TouchableOpacity.
     * It should change its icon to checkbox-checked/unchecked
     * on press as well as value (which is boolean) to !value.
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
