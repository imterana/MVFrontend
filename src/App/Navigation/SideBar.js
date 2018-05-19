import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import StyleConstants from '../StyleConstants';
import {DefaultText} from '../Components/Text';
import {SideBarListView, AvatarView, IconSymbol} from '../Components';

/**
 * A sidebar component for the navigation UI.
 */
export default class SideBar extends Component {
  /**
   * @param {Props} props - the props.
   */
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=>r1!==r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          title: 'Потоки',
          onPress: null,
        },
        {
          title: 'Подписки',
          onPress: null,
        },
        {
          title: 'Друзья',
          onPress: null,
        },
        {
          title: 'Истории',
          onPress: null,
        },
        {
          title: 'Настройки',
          onPress: null,
        },
      ]),
      onPress: {},
      name: 'Глеб Фоков',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/4%2C5V-AA-battery.jpg/125px-4%2C5V-AA-battery.jpg',
    };
  }
  /**
   * @return {React.Node} A sidebar component.
   */
  render() {
    const width = Dimensions.get('window').width;
    let sidebarWidth = 0;
    if (width > 400) {
      sidebarWidth = 200;
    } else {
      sidebarWidth = 0.8 * width;
    }
    return (
      <View style={[styles.sidebar, {width: sidebarWidth}]}>
        <TouchableOpacity onPress={this.state.onPress}>
          <View style={styles.rowContainer}>
            <View style={styles.infoContainer}>
              <AvatarView photo={this.state.photo} style={styles.avatar}/>
              <View style={styles.textContainer}>
                <DefaultText style={styles.text}>{this.state.name}</DefaultText>
              </View>
            </View>
            <View style={styles.iconContainer}>
              <IconSymbol name='circle-right' style={styles.icon}/>
            </View>
          </View>
        </TouchableOpacity>
        <SideBarListView
          dataSource={this.state.dataSource}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: StyleConstants.BACKGROUND_COLOR,
    borderWidth: 1,
    borderColor: StyleConstants.BORDER_COLOR,
    borderTopColor: StyleConstants.ALT_BACKGROUND_COLOR,
  },
  rowContainer: {
    flexDirection: 'row',
    height: 65,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderColor: StyleConstants.ALT_BACKGROUND_COLOR,
    borderWidth: 1,
    backgroundColor: StyleConstants.ALT_BACKGROUND_COLOR,
  },
  infoContainer: {
    flexDirection: 'row',
    flex: 1,
    left: 15,
    top: 9,
  },
  iconContainer: {
    flex: 0,
    justifyContent: 'center',
    marginRight: 20,
  },
  icon: {
    color: StyleConstants.BACKGROUND_COLOR,
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 3,
    left: 10,
  },
  avatar: {
    width: 45,
    height: 45,
  },
  textContainer: {
    left: 15,
    top: 15,
  },
  text: {
    color: StyleConstants.BACKGROUND_COLOR,
  },
});
