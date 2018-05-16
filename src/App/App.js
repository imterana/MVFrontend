import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Redirect, Route} from 'react-router';
import Router from './Router';

import {AboutScreen,
        DetailsScreen,
        HomeScreen,
        ButtonScreen,
        InputFieldScreen,
        SelectScreen,
        LoginScreen,
        EventSelectScreen,
        AvatarScreen,
        ListScreen,
        EventCreationScreen,
        CheckboxScreen,
        KarmaCircleScreen} from './Screens';

/**
 * The primary app component. Contains all the routes to screens.
 * @class App
 */
export default class App extends Component {
  /**
   * @return  {React.Node} Router with all possible routes in it.
   */
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <Route exact path="/" render={() => (
            <Redirect to="/home"/>
          )}/>
          <Route path='/home' component={HomeScreen} />
          <Route path='/details' component={DetailsScreen} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/button' component={ButtonScreen} />
          <Route path='/inputfield' component={InputFieldScreen} />
          <Route path='/checkbox' component={CheckboxScreen} />
          <Route path='/eventcreation' component={EventCreationScreen}/>
          <Route path='/login' component={LoginScreen} />
          <Route path='/list' component={ListScreen} />
          <Route path='/avatar' component={AvatarScreen} />
          <Route path='/select' component={SelectScreen} />
          <Route path='/eventselect' component={EventSelectScreen} />
          <Route path='/karmacircle' component={KarmaCircleScreen} />
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
});
