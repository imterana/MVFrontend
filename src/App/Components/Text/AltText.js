import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import StyleConstants from '../../StyleConstants';

const fontStyle = StyleSheet.create({
  textField: {
    fontFamily: StyleConstants.DEFAULT_FONT_FAMILY,
    fontSize: StyleConstants.DEFAULT_FONT_SIZE,
    color: StyleConstants.ALT_TEXT_COLOR,
  },
});

/**
 * A text component with default font settings.
 */
export default class DefaultText extends Component {
  static propTypes = {
    /*
     * Style, font style settings will be overriden.
     */
    style: PropTypes.any,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  }

  static defaultProps = {
   style: fontStyle.textField,
  }

  /**
   * @return {React.Node} A text node with applied style and overriden font.
   */
  render() {
    let {style, ...props} = this.props;
    return (
      <Text style={[fontStyle.textField, style]} {...props}>
       {this.props.children}
      </Text>
    );
  }
}
