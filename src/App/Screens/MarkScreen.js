import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {NavigationScreen} from '../Navigation';
import {ButtonRow, AvatarView} from '../Components';
import StyleConstants from '../StyleConstants';
import {DefaultText} from '../Components/Text';

/**
 * Mark screen.
 */
export default class MarkScreen extends Component {
  /**
   * @param {Props} props - the props.
   */
  constructor(props) {
    super(props);
    this.state = {
      name: 'Имя Фамилия',
      bio: 'МФТИ, ФУПМ, 575 группа'};
  }

  /**
   * @return {React.Node} A screen for marking.
   */
  render() {
    return (
      <NavigationScreen>
        <View style={style.container}>
          <View style={style.infoContainer}>
            <AvatarView style={style.avatar} userId={'042'}/>
            <View style={style.separator}/>
            <DefaultText style={style.text}>
              {this.state.name}
            </DefaultText>
            <View style={style.separator}/>
            <DefaultText style={style.text}>
              {this.state.bio}
            </DefaultText>
          </View>
          <View style={style.separator}/>
          <ButtonRow
            greenLabel='отметил'
            redLabel='не отмечу'
          />
        </View>
      </NavigationScreen>
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
