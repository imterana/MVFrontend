import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {IconSymbol} from '../Components';

/**
 * A custom stylable avatar component.
 */
export default class AvatarView extends Component {
  static propTypes = {
    style: PropTypes.any,
    userId: PropTypes.string,
  }
  static defaultProps = {
    style: null,
  }
  /**
   * @return {React.Node} A styled avatar component.
   */
  render() {
    const isVerified = checkVerified(this.props.userId);
    let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
    return (
      <UserAvatar pic = {pic} isVerified = {isVerified} />
    );
  }
}

function VerifiedUserAvatar(props) {
  return (
      <View style={styles.avatarSize}>
        <Image source={props.pic} style={styles.photoShape}/>
        <IconSymbol style={{position: 'absolute', marginLeft: '86%', marginTop: '86%'}} name='checkmark'/>
      </View>
    );
}

function NotVerifiedUserAvatar(props) {
  return (
      <View style={{width: 100, height: 100}}>
        <Image source={props.pic} style={styles.photoShape}/>
      </View>
    );
}

function checkVerified(userId) {
    if (userId.charAt(0) == "0") {
      return true;
    } 
    return false;
  }

function UserAvatar(props) {
  const isVerified = props.isVerified;
  if (isVerified) {
    return <VerifiedUserAvatar pic = {props.pic} />;
  }
  return <NotVerifiedUserAvatar pic = {props.pic} />;
}

const styles = StyleSheet.create({
  avatarSize: {
    width: 100, 
    height: 100,
  },
  photoShape: {
    width: '100%', 
    height: '100%', 
    borderRadius:'100%', 
    position: 'absolute',
  },
  checkmarkPosition: {
    position: 'absolute', 
    marginLeft: '86%', 
    marginTop: '86%',
  },
});