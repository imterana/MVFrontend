import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import {NavigationScreen} from '../Navigation';
import Select from '../Components/Select';
import {DateSelect, TimeSelect} from '../Components/';

/**
 * Select example screen.
 */
export default class SelectScreen extends Component {
  /**
   * @return {React.Node} screen with select
   */
  render() {
    return (
      <NavigationScreen>
        <View style={styles.container}>
          <DateSelect />
        </View>
        <View style={styles.container}>
          <TimeSelect />
        </View>
        <View style={styles.container}>
          <Select data={['something', 'another', 'yet another']} />
        </View>
      </NavigationScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding: 10,
    alignItems: 'center',
  },
});
