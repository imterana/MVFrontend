import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { withRouter } from 'react-router-dom';

import Button from '../Button';

export class NavigationBar extends Component {
  static defaultProps = {
    leftControl: null,
    rightControl: null,
    title: "",
  }

  render() {
    return (
      <View style={{ backgroundColor: 'red', marginTop: 0, height: 50, flexDirection: 'row'}}>
        <View style={{ marginLeft: 0, width: 50, marginTop: 0, marginBottom: 0, height: 50}}>
          {this.props.leftControl}
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{this.props.title}</Text>
        </View>
        <View style={{ marginRight: 0, width: 50, marginTop: 0, marginBottom: 0}}>
          {this.props.rightControl}
        </View>
      </View>
    );
  }
}
