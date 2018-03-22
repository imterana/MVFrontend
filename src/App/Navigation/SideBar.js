import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';

export default class SideBar extends Component {
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
    marginBottom: 0
  }
});
