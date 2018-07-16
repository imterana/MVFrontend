import React, {Component} from 'react';
import {View} from 'react-native';

import {NavigationScreen} from 'Navigation';
import {AvatarView} from 'Components';
import {DefaultText} from 'Components/Text';

/**
 * Avatar example screen.
 * Made only to demonstrate avatar.
 */
export default class AvatarScreen extends Component {
  /**
   * @return {React.Node} A screen with avatar.
   */
  render() {
    return (
      <NavigationScreen>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <DefaultText>Verified user with changed style</DefaultText>
          <AvatarView isVerified={true} style={{width: 150, height: 150}}/>
          <View style={{height: 30}}/>
          <DefaultText>Not verified user</DefaultText>
          <AvatarView isVerified={false}/>
        </View>
      </NavigationScreen>
    );
  }
}
