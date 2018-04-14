import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput, View} from 'react-native';

import StyleConstants from '../StyleConstants';
import IconSymbol from './IconSymbol';

/**
 * Conditionally rendering lens icon.
 * Used only as subsidiary class for InputField.
 */
class Lens extends Component {
  static propTypes = {
    /**
     * Determines, whether icon should be displayed or not.
     */
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    disabled: true,
  }

  /**
   * @return {React.Node} search icon or null if disabled
   */
  render() {
    const {disabled} = this.props;
    if (disabled) {
      return (null);
    } else {
      return (
        <IconSymbol name='search' style={style.icon} />
      );
    }
  }
}

/**
 * A custom input field used for text entry and search.
 */
export default class InputField extends Component {
  static propTypes = {
    /**
     * Lens is a bool parameter, determining whether
     * the lens will be shown.
     */
    lens: PropTypes.bool,
  }

  static defaultProps = {
    lens: false,
  }

  /**
   * @param {Props} props - the props
   * Constructor, adds state attribute with
   * inputed text.
   */
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * @param {event} event - the change event
   * Using handling Text Input, storing inputted text in
   * this.state.value.
   */
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  /**
   * @return {React.Node} styled input field
   */
  render() {
    const {lens} = this.props;
    return (
      <View style={style.inputViewContainer}>
        <Lens disabled={!lens} />
        <TextInput style={style.TextInput}
          placeholder='Урматы, семинар'
          onChange={this.handleChange}
          value={this.state.value} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  inputViewContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: StyleConstants.BORDER_COLOR,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  icon: {
    fontSize: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    padding: 10,
    flex: 1,
  },
});
