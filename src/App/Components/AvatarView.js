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
  constructor(props) {
    super(props);
    let id = this.props.userId;
    this.photo = getPhoto(id);
    this.isVerified = isVerified(id);
  }

  static propTypes = {
    style: PropTypes.any,
    userId: PropTypes.string.isRequired,
  }
  static defaultProps = {
    style: {},
    userId: null,
  }
  /**
   * @return {React.Node} A styled avatar component.
   */
  render() {
    return (
      <View style={styles.avatarSize}>
        <Image source={this.photo}
          style={[styles.photoShape, this.props.style]}
        />
        {isVerified(this.props.userId) &&
          <IconSymbol
            style={{position: 'absolute', marginLeft: '86%', marginTop: '86%'}}
            name='checkmark'
          />
        }
      </View>
    );
  }
}

/**
 * @return {uri} uri
 * @param {string} id - id.
 */
function getPhoto(id) {
  return {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
}

/**
 * @return {bool} varified or not
 * @param {string} id - id.
 */
function isVerified(id) {
  return id.charAt(0) == '0';
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
