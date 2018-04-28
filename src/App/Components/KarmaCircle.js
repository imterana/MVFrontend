import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import DefaultText from './Text/DefaultText';

/**
 * Custom component, which is used to visualise
 * a circle with amount of karma and background color,
 * responding to the value.
 */
export default class InputField extends Component {
  static propTypes = {
    /**
     * User ID, used to obtain user's amount of karma.
     */
    userId: PropTypes.string,
    value: PropTypes.int,
  }

  /**
   * @param {value} value - the amount of karma
   * @return {string} background color chosen
   * by user's karma
   */
  chooseBackground(value) {
    /**
     * Colors should be discussed with designer
     * and, probably, inserted into StyleConstants.js
     * (and used from there).
     * It is also may be a good idea to discuss actual
     * borders before mergin complete component.
     */
    const blueBorder = 100;
    const redBorder = 500;
    let background = 'white';
    if (value >= redBorder) {
      background = 'red';
    } else if (value >= blueBorder) {
      background = 'blue';
    }
    return background;
  }
  /**
   * @return {React.Node} circle with specific background
   */
  render() {
    /**
     * Amount of karma should be obtained using this.props.userId
     * by appropriate API call.
     */
    const background = this.chooseBackground(this.props.value);
    const styles = StyleSheet.create({
      circleShape: {
        width: 50,
        height: 50,
        borderRadius: '100%',
        backgroundColor: background,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
    return (
      <View style={styles.circleShape}>
        <DefaultText style={{color: 'white'}}>
          {this.props.value}
        </DefaultText>
      </View>
    );
  }
}
