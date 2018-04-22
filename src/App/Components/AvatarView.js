import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {IconSymbol} from '../Components';

/**
 * A custom stylable avatar component.
 */
export default class AvatarView extends Component {
  static propTypes = {
    style: PropTypes.any,
    userId: PropTypes.string,
    photo: PropTypes.uri,
  }
  static defaultProps = {
    style: null,
  }

  /**
   * @return {React.Node} A styled avatar component.
   */
  render() {
    let photo = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
    return (
      <View style={styles.avatarSize}>
        <Image source={photo}
          style={[styles.photoShape, this.props.style]}
        />
        {this.props.userId.charAt(0) == '0' &&
          <IconSymbol
            style={{position: 'absolute', marginLeft: '86%', marginTop: '86%'}}
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
  checkmarkPosition: {
    position: 'absolute',
    marginLeft: '86%',
    marginTop: '86%',
  },
});
