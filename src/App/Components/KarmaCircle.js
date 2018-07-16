import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

import DefaultText from 'Components/Text/DefaultText';

/**
 * Custom component, which is used to visualise
 * a circle with amount of karma and background color,
 * responding to the value.
 */
export default class KarmaCircle extends Component {
  /**
   * @param {props} props
   */
  constructor(props) {
    super(props);
  }
  static propTypes = {
    /**
     * User ID, used to obtain user's amount of karma.
     */
    value: PropTypes.number.isRequired,
    style: PropTypes.any,
  }
  static defaultProps = {
    style: {},
  }
  /**
   * @param {value} value - the amount of karma
   * @return {string} background color chosen
   * by user's karma
   */
  chooseBackground(value) {
    const redBorder = 0;
    const red = 'rgb(202, 92, 84)';
    const greenBorder = 1000;
    const green = 'rgb(116, 181, 102)';
    const silverBorder = 2000;
    const silver = '#C0C0C0';
    const gold = '#feb236';
    if (value < redBorder) {
      background = red;
    } else if (value < greenBorder) {
      background = green;
    } else if (value < silverBorder) {
      background = silver;
    } else {
      background = gold;
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
    const {value, style} = this.props;
    const background = this.chooseBackground(value);
    return (
      <View style={[styles.circleShape,
        {backgroundColor: background},
        style,
      ]}>
        <DefaultText style={{color: 'white'}}>
          {value}
        </DefaultText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleShape: {
    width: 50,
    height: 50,
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
