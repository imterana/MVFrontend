import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import StyleConstants from 'StyleConstants';
import {DefaultText} from 'Components/Text';

/**
 * Light button component.
 */
export default class LightButton extends Component {
  static propTypes = {
    label: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.any,
  }

  static defaultProps = {
    label: '',
    onPress: () => {},
    style: {},
  }

  /**
   * @return {React.Node} light button component
   */
  render() {
    const {label, onPress, style, ...other} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.lightButtonContainer, style]}
        {...other}>
        <DefaultText style={{color: StyleConstants.ALT_BACKGROUND_COLOR}}>
          {label}
        </DefaultText>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  lightButtonContainer: {
    flex: 0,
    width: 120,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: StyleConstants.BORDER_RADIUS,
    borderColor: StyleConstants.BORDER_COLOR,
    borderWidth: 1,
  },
});
