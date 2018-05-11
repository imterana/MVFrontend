import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListView, TouchableOpacity, View, StyleSheet} from 'react-native';

import {DefaultText} from './Text';
import StyleConstants from '../StyleConstants';

/**
 * SelectList custom component.
 */
export class SelectListItem extends Component {
  static propTypes = {
    /**
     * On item press callback.
     */
    onPressItem: PropTypes.func,
    /**
     * Value (aka label, text, etc).
     * Rendered using DefaultText.
     */
    value: PropTypes.string,
  }

  static defaultProps = {
    onPressItem: (value) => {},
    value: '',
  }

  /**
   * @param {Props} props - the props
   */
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  /**
   * Calls onPressItem callback passing
   * its value, so that SelectList knows
   * which item was pressed.
   */
  onPress() {
    this.props.onPressItem(this.props.value);
  }

  /**
   * @return {React.Node} select list item
   */
  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <DefaultText>
          {this.props.value}
        </DefaultText>
      </TouchableOpacity>
    );
  }
}

/**
 * Custom select list component.
 */
export default class SelectList extends Component {
  static propTypes = {
    /**
     * onPressItem callback
     */
    onPressItem: PropTypes.func,
    /**
     * data, presented in list
     */
    data: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    onPressItem: (item) => {},
  }

  /**
   * @param {Props} props - the props
   */
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2}
    );
    this.state = {
      dataSource: dataSource.cloneWithRows(props.data),
    };

    this.renderRow = this.renderRow.bind(this);
  }

  /**
   * @param {string} rowData - row data, passed to
   * SelectListItem via value prop
   * @return {React.Node} select list item
   */
  renderRow(rowData) {
    return (
      <View style={styles.listViewRowContainer}>
        <SelectListItem
          value={rowData}
          onPressItem={this.props.onPressItem} />
      </View>
    );
  }

  /**
   * @return {React.Node} styled picker
   */
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow} />
    );
  }
}

const styles = StyleSheet.create({
  listViewRowContainer: {
    borderWidth: 1,
    borderColor: StyleConstants.BORDER_COLOR,
  },
});
