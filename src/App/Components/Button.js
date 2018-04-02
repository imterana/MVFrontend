import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

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
     * A style can only be one of three default.
     * It is passed via string, containig its name.
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
        <Text style={labelStyle.label}>
          {this.props.label}
        </Text>
      </TouchableOpacity>
    );
  }
}

const backgroundStyle = StyleSheet.create({
  blue: {
    backgroundColor: 'blue',
  },
  green: {
    backgroundColor: 'green',
  },
  red: {
    backgroundColor: 'red',
  },
});

const buttonBaseStyle = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginLeft: 5,
    marginRight: 5,
  },
});

const labelStyle = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});
