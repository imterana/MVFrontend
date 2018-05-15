import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Link} from '../RouterWrapper';

import {DefaultText} from '../Components/Text';
import {NavigationScreen} from '../Navigation';
import {IconSymbol} from '../Components';
import StyleConstants from '../StyleConstants';

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
          <DefaultText>Home Screen</DefaultText>
          <IconSymbol name='html-five' />
          <Link to='/list'>
            <DefaultText>
              list test
            </DefaultText>
          </Link>
          <Link to='/details'>
            <DefaultText>
              details
            </DefaultText>
          </Link>
          <Link to='/about'>
            <DefaultText>
              about
            </DefaultText>
          </Link>
          <Link to='/button'>
            <DefaultText>
              button
            </DefaultText>
          </Link>
          <Link to='/inputfield'>
            <DefaultText>
              inputfield
            </DefaultText>
          </Link>
          <Link to='/login'>
            <DefaultText>
              login
            </DefaultText>
          </Link>
          <Link to='/avatar'>
            <DefaultText>
              avatar
            </DefaultText>
          </Link>
          <Link to='/select'>
            <DefaultText>
              select
            </DefaultText>
          </Link>
          <Link to='/eventselect'>
            <DefaultText>
              event select
            </DefaultText>
          </Link>
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
    backgroundColor: StyleConstants.BACKGROUND_COLOR,
  },
});
