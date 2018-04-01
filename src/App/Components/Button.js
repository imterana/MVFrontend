import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

/**
 * A custom button used for most buttons in project.
 * Contains text. Can have only one of three default styles.
 */
export default class StandartButton extends Component {
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
    styleName: PropTypes.string,
  }

  static defaultProps = {
    label: '',
    styleName: null,
  }

  /**
   * @return {React.Node} A styled button component.
   */
  render() {
    const {onPress, styleName} = this.props;
    if (styleName == 'baseButton'
      || !(styleName in style)) {
      return <Text>bad</Text>;
    }
    const buttonStyle = [style.baseButton, style[styleName]];
    return (
      <TouchableOpacity
        onPress={onPress}
        style={buttonStyle}>
        <Text>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  baseButton: {
    height: 50,
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  blueBack: {
    backgroundColor: 'blue',
  },
  greenBack: {
    backgroundColor: 'green',
  },
  redBack: {
    backgroundColor: 'red',
  },
});
