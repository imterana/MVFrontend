import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {NavigationScreen} from '../Navigation';
import {AvatarView} from '../Components';

/**
 * Button example screen.
 * Made only to demonstrate button.
 */
export default class ButtonScreen extends Component {
  /**
   * @return {React.Node} A screen with button.
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
          <Text>Verified user</Text>
          <AvatarView userId= "043" />
          <View style={{height: 30}}/>
          <Text>Not verified user</Text>
          <AvatarView userId= "43" />
        </View>
      </NavigationScreen>
    );
  }
}
