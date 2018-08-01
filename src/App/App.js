import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Redirect, Route} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Router from 'Router';
import {markAsVisited} from 'Reducers';

import {
  DemoScreen,
  EventCreationScreen,
  EventSelectScreen,
  LoginScreen,
  SelectScreen,
} from './Screens';


const store = createStore(markAsVisited);

const debugMode = process.env.NODE_ENV === 'development';

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
            <Route exact path="/" render={() => (
              store.getState().loggedIn ? <Redirect to='/eventselect/' />
                                        : <Redirect to='/login' />)}
            />
            {debugMode && <Route path='/demo/' component={DemoScreen}/>}
            <Route path='/eventcreation' component={EventCreationScreen}/>
            <Route path='/eventselect' component={EventSelectScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/select' component={SelectScreen} />
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
