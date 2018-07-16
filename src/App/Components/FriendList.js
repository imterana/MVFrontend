import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListView, TouchableOpacity, View, StyleSheet} from 'react-native';

import StyleConstants from 'StyleConstants';
import {DefaultText} from 'Components/Text';

import AvatarView from './AvatarView';
import IconSymbol from './IconSymbol';
/**
 * A pressable list row element with custom title.
 * @class ListRow
 */
class ListRow extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    confirmed: PropTypes.bool,
    photo: PropTypes.string,
    onPress: PropTypes.func,
  }

  /**
   * @return {React.Node} A list element with specified title and onpress.
   */
  render() {
    const {name, photo, onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.rowContainer}>
          <View style={styles.stick}/>
          <View style={styles.infoContainer}>
            <AvatarView photo={photo} style={styles.avatar}/>
            <View style={styles.textContainer}>
              <DefaultText>{name}</DefaultText>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <IconSymbol name='circle-right' style={styles.icon}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

/**
 * A styled list component with a DataSource.
 * @class FriendListView
 */
export default class FriendList extends Component {
  /**
   * @return {React.Node} A list
   */
  render() {
    const {...other} = this.props;
    return (
      <ListView
        renderRow={(data)=>
          <ListRow {...data}/>
        }
        {...other}
      />
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    height: 65,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    borderRadius: 5,
    borderColor: StyleConstants.BORDER_COLOR,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  stick: {
    backgroundColor: StyleConstants.ALT_BACKGROUND_COLOR,
    width: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    flex: 1,
    left: 10,
    top: 9,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
  },
  subtitle: {
    flex: 1,
  },
  iconContainer: {
    flex: 0,
    justifyContent: 'center',
    marginRight: 20,
  },
  icon: {
    color: StyleConstants.ALT_BACKGROUND_COLOR,
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
});
