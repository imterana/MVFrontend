import React, {Component} from 'react';
import {ListView, View, StyleSheet} from 'react-native';

import {FriendList} from '../Components';
import {NavigationScreen} from '../Navigation';

/**
 * A screen demonstrating FriendList.
 */
export default class FriendListScreen extends Component {
  /**
   * @param {Props} props - the props.
   */
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=>r1!==r2,
      sectionHeaderHasChanged: (r1, r2)=>r1!==r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          name: 'Аркадий',
        },
        {
          name: 'Петр',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/4%2C5V-AA-battery.jpg/125px-4%2C5V-AA-battery.jpg',
        },
      ]),
    };
  }
  /**
   * @return {React.Node} A screen with ListView in it.
   */
  render() {
    return (
      <NavigationScreen>
        <View style={styles.container}>
          <FriendList
            dataSource={this.state.dataSource}
          />
        </View>
      </NavigationScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 15,
  },
});
