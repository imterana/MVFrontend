import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListView, TouchableOpacity, View, StyleSheet} from 'react-native';
import StyleConstants from '../StyleConstants';
import {DefaultText} from '../Components/Text';

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
          <View style={styles.infoContainer}>
            <DefaultText>{title}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

/**
 * A styled list component with a DataSource.
 * @class DefaultListView
 */
export default class SideBarListView extends Component {
  /**
   * @return {React.Node} a styled list component
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
    height: 32,
    borderColor: StyleConstants.BORDER_COLOR,
    borderWidth: 1,
    backgroundColor: 'white',
    borderTopColor: StyleConstants.BACKGROUND_COLOR,
    borderRightColor: StyleConstants.BACKGROUND_COLOR,
    borderLeftColor: StyleConstants.BACKGROUND_COLOR,
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
