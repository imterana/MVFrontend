import React, {Component} from 'react';
import {View} from 'react-native';
import {NavigationScreen} from '../Navigation';
import {KarmaCircle} from '../Components';

/**
 * KarmaCircle example screen.
 */
export default class KarmaCircleScreen extends Component {
  /**
   * @return {React.Node} A screen with KarmaCircle
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
          <KarmaCircle value={-50} />
          <KarmaCircle style={{width: 100, height: 100}} value={250} />
          <KarmaCircle value={1250} />
          <KarmaCircle value={2250} />
        </View>
      </NavigationScreen>
    );
  }
}
