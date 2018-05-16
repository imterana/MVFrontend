import React, {Component} from 'react';
import {StyleSheet,
        View,
        TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import StyleConstants from '../StyleConstants';
import IconSymbol from './IconSymbol';
import DefaultText from './Text/DefaultText';

/**
 * Custom picker (aka select) field component.
 * Does not contain any logic, only looks.
 */
export default class SelectField extends Component {
  static propTypes = {
    /**
     * onPress handler
     */
    onPress: PropTypes.func,
    /**
     * Label to show inside the field
     */
    label: PropTypes.string,
  }

  static defaultProps = {
    onPress: () => {},
    label: '',
  }

  /**
   * @return {React.Node} styled select field
   */
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.pickerContainer}>
          <View style={styles.pickerStyle}>
            <View style={styles.textContainer}>
              <DefaultText
                numberOfLines={1}
                ellipsizeMode='tail'
                style={styles.textStyle}>
                {this.props.label}
              </DefaultText>
            </View>
            <View style={styles.circleContainer}>
              <IconSymbol style={styles.circleStyle} name='circle-down' />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  pickerContainer: {
    borderWidth: 1,
    borderRadius: StyleConstants.BORDER_RADIUS,
    borderColor: StyleConstants.BORDER_COLOR,
    flex: 0,
    height: 27,
    width: 80,
  },
  pickerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    position: 'absolute',
    left: 0,
    width: '80%',
  },
  textStyle: {
    flex: 1,
  },
  circleContainer: {
    position: 'absolute',
    left: '80%',
    width: '20%',
  },
  circleStyle: {
    color: StyleConstants.ALT_BACKGROUND_COLOR,
  },
});

