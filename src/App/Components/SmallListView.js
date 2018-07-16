import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListView, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

import StyleConstants from 'StyleConstants';

/**
 * A pressable list row element with custom title.
 * @class ListRow
 */
class ListRow extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
  }

  /**
   * @return {React.Node} A list element with specified title and onpress.
   */
  render() {
    const {title, onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.rowContainer}>
          <View style={styles.stick}/>
          <View style={styles.infoContainer}>
            <Text>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

/**
 * A section header component for the list.
 * @class SectionHeader
 */
class ListHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  /**
   * @return {React.Node} A section header with the title.
   */
  render() {
    const {title} = this.props;
    return (
      <View style={[styles.rowContainer, styles.infoContainer, styles.title]}>
          <Text style={{color: 'white'}}>{title}</Text>
      </View>
    );
  }
}

/**
 * A styled list component with a DataSource.
 * @class DefaultListView
 */
export default class AdminListView extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  /**
   * @return {React.Node} a styled list component
   */
  render() {
    const {title, ...other} = this.props;
    return (
      <ListView
         renderHeader={()=>title && <ListHeader title={title} />}
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
    height: 32,
    marginLeft: 10,
    marginRight: 10,
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
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1,
  },

  title: {
    backgroundColor: StyleConstants.ALT_BACKGROUND_COLOR,
    paddingLeft: 10,
  },

  headerContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
});
