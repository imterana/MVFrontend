import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {NavigationScreen} from '../Navigation';
import {BackendLink, IconSymbol} from '../Components';
import {DefaultText} from '../Components/Text';
import StyleConstants from '../StyleConstants';

const logo = require('./img/logo.png');

/**
 * A Login screen class with authorisation links.
 * @class LoginScreen
 */
export default class LoginScreen extends Component {
  /**
   * @return {React.Node} A login screen.
   */
  render() {
    return (
      <View style={style.container}>
        <View style={style.logoContainer}>
          <Image
            source={require('./img/logo.png')}
            style={style.logoImage}
            resizeMode='contain'
          />
        </View>
        <DefaultText style={style.text}>
          Зарегистрироваться{'\n'}
          или{'\n'}
          Войти:
        </DefaultText>
        <View style={style.providerListContainer}>
          <BackendLink href='/accounts/vk/login/'
              style={style.providerContainer}>
            <IconSymbol name='vk' style={style.providerIcon}/>
          </BackendLink>
          <BackendLink href='/accounts/google/login/'
              style={style.providerContainer}>
            <IconSymbol name='google2' style={style.providerIcon}/>
          </BackendLink>
        </View>
        <View style={style.providerListContainer}>
          <BackendLink href='/accounts/github/login/'
              style={style.providerContainer}>
            <IconSymbol name='github' style={style.providerIcon}/>
          </BackendLink>
          <BackendLink href='/admin/'
              style={style.providerContainer}>
            <IconSymbol name='html-five' style={style.providerIcon}/>
          </BackendLink>
        </View>
      </View>
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
  providerListContainer: {
    flexDirection: 'row',
  },
  providerContainer: {
    margin: 10,
  },
  providerIcon: {
    fontSize: 64,
    color: StyleConstants.ALT_BACKGROUND_COLOR,
  },
  text: {
    color: StyleConstants.ALT_BACKGROUND_COLOR,
    fontSize: 16,
    marginTop: 200,
    marginBottom: 10,
    textAlign: 'center',
  },
  logoImage: {
    flex: 1,
    height: '100%',
    width: '100%',
    marginTop: 30,
    marginBottom: 30,
  },
  logoContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    height: '40%',
    width: '100%',
    backgroundColor: StyleConstants.ALT_BACKGROUND_COLOR,
    alignItems: 'center',
  },
});
