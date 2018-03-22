import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Redirect, BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import { AboutScreen, DetailsScreen, HomeScreen } from './Screens'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter history={createBrowserHistory}>
        <View style={styles.container}>
          <Redirect from='/' to='/home' />
          <Route exact path='/home' component={HomeScreen} />
          <Route path='/details' component={DetailsScreen} />
          <Route path='/about' component={AboutScreen} />
        </View>
      </BrowserRouter>
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
    backgroundColor: 'aqua'
  }
});
