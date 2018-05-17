import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Redirect, Route} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Router from './Router';
import {markAsVisited} from './Reducers';

import {
    AboutScreen,
    AvatarScreen,
    ButtonScreen,
    CheckboxScreen,
    DetailsScreen,
    EventCreationScreen,
    EventScreen,
    EventSelectScreen,
    FriendListScreen,
    HomeScreen,
    InputFieldScreen,
    KarmaCircleScreen,
    ListScreen,
    LoginScreen,
    SelectScreen,
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
            <Route exact path="/" render={() => (
              store.getState().loggedIn ? <Redirect to='/home/' />
                                        : <Redirect to='/login' />)}
            />
            <Route path='/about' component={AboutScreen} />
            <Route path='/avatar' component={AvatarScreen} />
            <Route path='/button' component={ButtonScreen} />
            <Route path='/checkbox' component={CheckboxScreen} />
            <Route path='/details' component={DetailsScreen} />
            <Route path='/event/:eventId' component={EventScreen} />
            <Route path='/eventcreation' component={EventCreationScreen}/>
            <Route path='/eventselect' component={EventSelectScreen} />
            <Route path='/friendlist' component={FriendListScreen}/>
            <Route path='/home' component={HomeScreen} />
            <Route path='/inputfield' component={InputFieldScreen} />
            <Route path='/karmacircle' component={KarmaCircleScreen} />
            <Route path='/list' component={ListScreen} />
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
