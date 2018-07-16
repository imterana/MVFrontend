import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

import {TitleText} from 'Components/Text';
import StyleConstants from 'StyleConstants';

/**
 * Navigation bar component. Contains a title, and two controls on each side.
 * @class NavigationBar
 */
export class NavigationBar extends Component {
  static propTypes = {
    /**
     * A control on the left side of the bar.
     */
    leftControl: PropTypes.element,
    /**
     * A control on the right side of the bar.
     */
    rightControl: PropTypes.element,
    /**
     * Title to be displayed in the middle of the bar.
     */
    title: PropTypes.string,
  }

  static defaultProps = {
    leftControl: null,
    rightControl: null,
    title: '',
  }

  /**
   * @return {React.Node} A navigation bar with the title and the controls.
   */
  render() {
    return (
      <View style={style.mainContainer}>
        <View style={style.leftControlContainer}>
          {this.props.leftControl}
        </View>
        <View style={style.titleContainer}>
          <TitleText>{this.props.title}</TitleText>
        </View>
        <View style={style.rightControlContainer}>
          {this.props.rightControl}
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: StyleConstants.ALT_BACKGROUND_COLOR,
    flexDirection: 'row',
    height: 50,
    marginTop: 0,
  },
  leftControlContainer: {
    height: 50,
    marginBottom: 0,
    marginLeft: 0,
    marginTop: 0,
    width: 50,
  },
  rightControlContainer: {
    marginBottom: 0,
    marginRight: 0,
    marginTop: 0,
    width: 50,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
