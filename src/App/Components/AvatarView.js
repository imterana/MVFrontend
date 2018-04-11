import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, ImageBackground} from 'react-native';

/**
 * A custom stylable avatar component.
 */
export default class AvatarView extends Component {
  static propTypes = {
    style: PropTypes.any,
  }
  static defaultProps = {
    style: null,
  }
  /**
   * @return {React.Node} A styled avatar component.
   */
  render() {
    let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
    return (
      <ImageBackground source={pic} style={{width: 100, height: 100}}>
        <Text>Inside</Text>
      </ImageBackground>
    );
  }
}
