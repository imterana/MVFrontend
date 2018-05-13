import React from 'react';
import {TimePickerAndroid} from 'react-native';

import BaseTimeSelect from './BaseTimeSelect';
import SelectField from './SelectField';

/**
 * Android time select component.
 */
export default class TimeSelect extends BaseTimeSelect {
  /**
   * Opens TimePickerAndroid.
   */
  async askTimeAndroid() {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        date: this.state.selectedTime,
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        newTime = new Date();
        newTime.setHours(hour);
        newTime.setMinutes(minute);
        this.setTime(newTime);
      }
    } catch ({code, message}) {
      console.warn('Cannot open time picker', message);
    }
  }

  /**
   * @return {React.Node} styled time picker
   */
  render() {
    if (this.state.pressed) {
      /**
       * No return here, because, when function exits,
       * the choice is already made.
       */
      this.askTimeAndroid();
    }
    return (
      <SelectField
        onPress={this.onPress}
        label={this.formatTime(this.state.selectedTime)} />
    );
  }
}
