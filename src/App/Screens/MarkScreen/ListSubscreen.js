import React, {Component} from 'react';
import {ListView, View} from 'react-native';
import PropTypes from 'prop-types';

import {FriendList} from 'Components';
import {AltText} from 'Components/Text';

/**
 * A marking subscreen with user table.
 * @class ListSubscreen
 */
export default class ListSubscreen extends Component {
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
      dataSource: ds.cloneWithRows(this.props.users),
    };
  }

  static propTypes = {
    users: PropTypes.array,
  }

  /**
   * Updates the state (datasource) on update.
   * @param {Object} nextProps - new props.
   * @param {Object} prevState - old state.
   * @return {Object} - the new state.
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...prevState,
      dataSource: prevState.dataSource.cloneWithRows(nextProps.users),
    };
  }

  /**
   * @return {React.Node} The user list.
   */
  render() {
    return (
      <View style={{margin: 10, height: '100%'}}>
      {this.props.users.length > 0
        ? <FriendList dataSource={this.state.dataSource} enableEmptySections/>
        : <View style={{flex: 1,
                       alignItems: 'center',
                       justifyContent: 'center'}}>
            <AltText>Пока некого отмечать...</AltText>
          </View>
      }
      </View>
    );
  }
}
