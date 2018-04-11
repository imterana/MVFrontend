import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from '../RouterWrapper';

import {NavigationScreen} from '../Navigation';
import {IconSymbol, AvatarView} from '../Components';

/**
 * A root home screen with links to subpages.
 * @class HomeScreen
 */
export default class HomeScreen extends Component {
  /**
   * @return {React.Node} A screen with subpages.
   */
  render() {
    return (
      <NavigationScreen hamburger>
        <View style={style.container}>
          <Text>Home Screen</Text>
          <AvatarView style={{width: 100, height: 100}}></AvatarView>
          <IconSymbol name='html-five'/>
          <IconSymbol name='checkmark'/>
          <Link to='/details'><Text>details</Text></Link>
          <Link to='/about'><Text>about</Text></Link>
        </View>
      </NavigationScreen>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
