import React, {Component} from 'react';
import {ListView, View, StyleSheet, Text} from 'react-native';
import {DefaultListView, AdminListView} from '../Components';
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
            title: 'title 1',
            subtitle: 'subtitle',
            onPress: null,
          },
          {
            title: 'title 2',
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
          <View style={styles.separator}>
            <Text style={{color: 'grey'}}>DefaultListView</Text>
          </View> 
          <DefaultListView
            dataSource={this.state.dataSource}
          />
        </View>
        <View>
          <View style={styles.separator}>
            <Text style={{color: 'grey'}}>AdminListView</Text>
          </View>
          <AdminListView
            dataSource={this.state.dataSource}
          />
        </View>
      </NavigationScreen>
    );
  }
}

const styles = StyleSheet.create({
  separator: {  
    height: 40,
    flexDirection: 'column', 
    justifyContent: 'center', 
    paddingLeft: 20,
  },  
});