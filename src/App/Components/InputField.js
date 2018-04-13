import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput, View, Image} from 'react-native';

import StyleConstants from '../StyleConstants';
import IconSymbol from './IconSymbol'

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

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  /**
   * @return {React.Node} A styled button component.
   */
  render() {
    return (
      <View style={style.inputViewContainer}>
        <TextInput style={style.TextInput}
          placeholder='Урматы, семинар'
          onChange={this.handleChange}
          value={this.state.value} />
      </View>
    );
  }
}
const style = StyleSheet.create({
  icon: {
    padding: 10,
    height: 25,
    width: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputViewContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: StyleConstants.BORDER_COLOR,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  TextInput: {
    padding: 10,
    flex: 1,
  },
});
