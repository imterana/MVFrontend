import React from 'react';
import {View} from 'react-native';

import CalendarPicker from './CalendarPicker';

import BaseDateSelect from './BaseDateSelect';
import SelectField from './SelectField';

/**
 * Web date select component.
 */
export default class DateSelect extends BaseDateSelect {
  /**
   * @return {React.Node} styled date picker
   */
  render() {
    /**
     * Using inline style, as StyleSheet styles do not
     * pass alignItems.
     */
    return (
      <View style={{alignItems: 'center'}}>
        <SelectField
          onPress={this.onPress}
          label={this.formatDate(this.state.selectedDate)} />
        {this.state.pressed &&
          <CalendarPicker
            width={300}
            onDateChange={this.onDateChange}
            startFromMonday={true}
            minDate={this.props.minDate}
            maxDate={this.props.maxDate} />
        }
      </View>
    );
  }
}
