import React from 'react';
import {View, DatePickerIOS, Dimensions} from 'react-native';

import BaseDateSelect from './BaseDateSelect';
import SelectField from './SelectField';

/**
 * IOS date select component.
 */
export default class DateSelect extends BaseDateSelect {
  /**
   * On date change handler.
   * Differs from default (defined in BaseDateSelect)
   * by not calling this.changePressed().
   * @param {Date} newDate - new choosen date
   */
  onDateChange(newDate) {
    this.setDate(newDate);
    /**
     * Callback.
     */
    this.props.onDateChange(newDate);
  }

  /**
   * @return {React.Node} styled date picker
   */
  render() {
    /**
     * Using inline styles for DatePickerIOS
     * as they depend on runtime constant width.
     *
     * Using inline styles for View as otherwise
     * alignItems won't be set properly.
     */
    const {width} = Dimensions.get('window');
    return (
      <View style={{alignItems: 'center'}}>
        <SelectField
          onPress={this.onPress}
          label={this.formatDate(this.state.selectedDate)} />
        {this.state.pressed &&
          <DatePickerIOS
            style={{flex: 1, height: width, width: width}}
            mode={'date'}
            date={this.state.selectedDate}
            onDateChange={this.onDateChange} />
        }
      </View>
    );
  }
}
