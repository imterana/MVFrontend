import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import TitleText from './Text/TitleText';
import StyleConstants from '../StyleConstants';

/**
 * A custom button used for most buttons in project.
 * Contains text. Can have only one of three default styles.
 */
export default class Button extends Component {
  static propTypes = {
    /**
     * Label can only be a string.
     */
    label: PropTypes.string,
    /**
     * Press handler function.
     */
    onPress: PropTypes.func,
    /**
     * A style can only be one of three default differ only
     * in background color.
     * It is passed via string, containig background color
     * name (only one of three default: 'blue', 'red' and 'green').
     */
    background: PropTypes.string,
  }

  static defaultProps = {
    label: '',
    background: 'blue',
  }

  /**
   * @return {React.Node} A styled button component.
   */
  render() {
    const {onPress, background} = this.props;
    if (!(background in backgroundStyle)) {
      return <Text>bad</Text>;
    }
    const buttonStyle
      = [buttonBaseStyle.button, backgroundStyle[background]];
    return (
      <TouchableOpacity
        onPress={onPress}
        style={buttonStyle}>
        <TitleText>
          {this.props.label}
        </TitleText>
      </TouchableOpacity>
    );
  }
}

const backgroundStyle = StyleSheet.create({
  blue: {
    backgroundColor: StyleConstants.ALT_BACKGROUND_COLOR,
  },
  green: {
    backgroundColor: StyleConstants.GREEN_BUTTON_COLOR,
  },
  red: {
    backgroundColor: StyleConstants.RED_BUTTON_COLOR,
  },
});

const buttonBaseStyle = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: StyleConstants.BORDER_COLOR,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginLeft: 5,
    marginRight: 5,
  },
});
