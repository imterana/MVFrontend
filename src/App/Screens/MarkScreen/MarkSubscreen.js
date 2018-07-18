import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

import {ButtonRow, AvatarView} from 'Components';
import StyleConstants from 'StyleConstants';
import {DefaultText} from 'Components/Text';

/**
 * Mark screen.
 */
export default class MarkUserMarkSubscreen extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    photo: PropTypes.string,
    confirmed: PropTypes.bool,
    onConfirm: PropTypes.func,
    onDeny: PropTypes.func,
  }

  /**
   * @return {React.Node} A screen for marking.
   */
  render() {
    const {name, bio, photo, confirmed, onConfirm, onDeny} = this.props;
    return (
        <View style={style.container}>
          <View style={style.infoContainer}>
            <AvatarView
              style={style.avatar}
              photo={photo}
              confirmed={confirmed}
            />
            <View style={style.separator}/>
            <DefaultText style={style.text}>
              {name}
            </DefaultText>
            <View style={style.separator}/>
            <DefaultText style={style.text}>
              {bio}
            </DefaultText>
          </View>
          <View style={style.separator}/>
          <ButtonRow
            greenLabel='отметил'
            onGreenPress={onConfirm}
            redLabel='не отмечу'
            onRedPress={onDeny}
          />
        </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    top: 1,
  },
  infoContainer: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: StyleConstants.ALT_BACKGROUND_COLOR,
  },
  separator: {
    height: 10,
  },
  text: {
    color: StyleConstants.BACKGROUND_COLOR,
  },
  avatar: {
    height: 90,
    width: 90,
  },
});
