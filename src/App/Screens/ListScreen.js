import React, {Component} from 'react';
import {ListView, View, StyleSheet} from 'react-native';
import {DefaultListView, SectionHeader} from '../Components';
import {NavigationScreen} from '../Navigation';

/**
 * A screen demonstrating ListView.
 */
export default class ListScreen extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1!=r2});
    this.state = {
      dataSource: ds.cloneWithRows(
        [
          {
            title: 'huh',
            onPress: null,
          },
        ]
      ),
    };
  }
  /**
   * @return {React.Node} A screen with ListView in it.
   */
  render() {
    return (
      <NavigationScreen>
        <View>
          <DefaultListView
            dataSource={this.state.dataSource}
          />
        </View>
      </NavigationScreen>
    );
  }
}
