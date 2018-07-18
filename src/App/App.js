import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Route} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Router from './Router';
import {markAsVisited} from './Reducers';

import {
    EventCreationScreen,
    EventScreen,
    EventSelectScreen,
    LoginScreen,
} from './Screens';


const store = createStore(markAsVisited);

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
      <Provider store={store}>
        <Router>
          <View style={styles.container}>
          <Route path='/event/:eventId' component={EventScreen}/>
          <Route path='/eventcreation' component={EventCreationScreen}/>
          <Route path='/eventselect' component={EventSelectScreen} />
          <Route path='/login' component={LoginScreen} />
          </View>
        </Router>
      </Provider>
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
