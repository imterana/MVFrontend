import React, {Component} from 'react';
import {ListView, View, StyleSheet} from 'react-native';

import {BigListView, SmallListView} from '../Components';
import {NavigationScreen} from '../Navigation';
import {AltText} from '../Components/Text';

/**
 * A screen demonstrating ListView.
 */
export default class ListScreen extends Component {
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
      dataSourceWithHeaders: ds.cloneWithRowsAndSections({
        'section_1': [
          {
            title: 'title 1',
            subtitle: 'subtitle',
            onPress: null,
          },
          {
            title: 'title 2',
            onPress: null,
          },
        ],
        'section_2': [
          {
            title: 'title 1',
            subtitle: 'subtitle',
            onPress: null,
          },
          {
            title: 'title 2',
            onPress: null,
          },
        ],
      }),
      dataSource: ds.cloneWithRows([
        {
          title: 'title 1',
          subtitle: 'subtitle',
          onPress: null,
        },
        {
          title: 'title 2',
          onPress: null,
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
        <View>
          <View style={styles.separator}>
            <AltText>BigListView</AltText>
          </View>
          <BigListView
            dataSource={this.state.dataSource}
          />
          <View style={styles.separator}>
            <AltText>BigListView (headers)</AltText>
          </View>
          <BigListView
            dataSource={this.state.dataSourceWithHeaders}
            withHeaders={true}
          />
        </View>
        <View>
          <View style={styles.separator}>
            <AltText>SmallListView</AltText>
          </View>
          <SmallListView
            dataSource={this.state.dataSource}
            title="Sample title"
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
