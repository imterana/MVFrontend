import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {IconSymbol} from '../Components';

/**
 * A custom stylable avatar component.
 */
export default class AvatarView extends Component {
  /**
   * @param {props} props
   */
  static propTypes = {
    style: PropTypes.any,
    isVerified: PropTypes.bool,
    photo: PropTypes.string,
  }
  static defaultProps = {
    style: {},
    isVerified: false,
    photo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
  }
  /**
   * @return {React.Node} A styled avatar component.
   */
  render() {
    const {isVerified, photo, style} = this.props;
    return (
      <View style={[styles.avatarSize, style]}>
        <Image source={photo}
          style={styles.photoShape}
        />
        {isVerified &&
          <IconSymbol
            style={{position: 'absolute', bottom: 0, right: 0}}
            name='checkmark'
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatarSize: {
    width: 100,
    height: 100,
  },
  photoShape: {
    width: '100%',
    height: '100%',
    borderRadius: '100%',
    position: 'absolute',
  },
});
