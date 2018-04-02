import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import StyleConstants from '../StyleConstants';
import {TitleText} from '../Components/Text';

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
        <TitleText>Sidebar</TitleText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: StyleConstants.ALT_BACKGROUND_COLOR,
    width: 100,
    marginTop: 0,
    marginLeft: 0,
    marginBottom: 0,
  },
});
