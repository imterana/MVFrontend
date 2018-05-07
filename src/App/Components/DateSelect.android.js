import React from 'react';

import BaseDateSelect from './BaseDateSelect';
import SelectField from './SelectField';

/**
 * Android date select component.
 */
export default class DateSelect extends BaseDateSelect {
  /**
   * Opens DatePickerAndroid.
   */
  async askDateAndroid() {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: this.state.selectedDate,
        minDate: this.props.minDate,
        maxDate: this.props.maxDate,
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        newDate = new Date();
        newDate.setFullYear(year);
        newDate.setMonth(month);
        newDate.setDate(day);
        this.setDate(newDate);
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  /**
   * @return {React.Node} styled date picker
   */
  render() {
    if (this.state.pressed) {
      /**
       * No return here, because, when function exits,
       * the choice is already made.
       */
      this.askDateAndroid();
    }
    return (
      <SelectField
        onPress={this.onPress}
        label={this.formatDate(this.state.selectedDate)} />
    );
  }
}
