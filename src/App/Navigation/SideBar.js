import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

/**
 * A sidebar component for the navigation UI.
 */
export default class SideBar extends Component {
  /**
   * @return {React.Node} A sidebar component.
   */
  render() {
    return (
      <View style={styles.sidebar}>
        <Text>Sidebar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: 'blue',
    width: 100,
    marginTop: 0,
    marginLeft: 0,
    marginBottom: 0,
  },
});
