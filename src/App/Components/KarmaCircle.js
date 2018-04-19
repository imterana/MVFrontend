import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
    if (value >= blueBorder) {
      background = 'blue';
    }
    if (value >= redBorder) {
      background = 'red';
    }
    return background;
  }

  /**
   * @return {React.Node} circle with specific background
   * color and value in it
   */
  render() {
    /**
     * Amount of karma should be obtained using this.props.userId
     * by appropriate API call.
     */
    const background = this.chooseBackground(100);
    return (
      <DefaultText
        style={{backgroundColor: background}}>
        Circle will be here
      </DefaultText>
    );
  }
}
