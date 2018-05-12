import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import SelectField from './SelectField';
import SelectList from './SelectList';

/**
 * Custom picker (aka select) component.
 */
export default class Select extends Component {
  static propTypes = {
    /**
     * data, presented in list
     */
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    /**
     * Selected item.
     * Index in data array!
     */
    selected: PropTypes.number,
  }

  static defaultProps = {
    selected: 0,
  }

  /**
   * @param {Props} props - the props
   */
  constructor(props) {
    super(props);

    this.state = {pressed: false, selected: props.data[props.selected]};

    this.onSelectFieldPress = this.onSelectFieldPress.bind(this);
    this.onPressItem = this.onPressItem.bind(this);
    this.prepareData = this.prepareData.bind(this);
    this.removeSelected = this.removeSelected.bind(this);
  }

  /**
   * SelectField press handler
   */
  onSelectFieldPress() {
    this.setState({pressed: !this.state.pressed});
  }

  /**
   * SelectListItem press handler
   * @param {string} item - pressed item
   */
  onPressItem(item) {
    this.setState({selected: item, pressed: false});
  }

  /**
   * Preparing this.data.
   */
  prepareData() {
    /**
     * Copy data to this.data.
     */
    this.data = this.props.data.slice(0);
    /**
     * If selected item is present in array
     * remove it.
     */
    this.removeSelected();
  }

  /**
   * Removes this.state.selected from this.data.
   */
  removeSelected() {
    const index = this.data.indexOf(this.state.selected);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  /**
   * @return {React.Node} styled picker
   */
  render() {
    this.prepareData();
    return (
      <View style={{flex: 1}}>
        <SelectField
          onPress={this.onSelectFieldPress}
          label={this.state.selected} />
        {this.state.pressed &&
          <SelectList
            data={this.data}
            onPressItem={this.onPressItem} />}
      </View>
    );
  }
}
