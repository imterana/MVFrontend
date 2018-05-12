import React from 'react';
import {View, DatePickerIOS, Dimensions} from 'react-native';

import BaseTimeSelect from './BaseTimeSelect';
import SelectField from './SelectField';

/**
 * IOS time select component.
 */
export default class TimeSelect extends BaseTimeSelect {
  /**
   * On time change handler.
   * Differs from default (defined in BaseTimeSelect)
   * by not calling this.changePressed().
   * @param {Date} newTime - new choosen time
   */
  onTimeChange(newTime) {
    this.setTime(newTime);
    /**
     * Callback.
     */
    this.props.onTimeChange(newTime);
  }

  /**
   * @return {React.Node} styled time picker
   */
  render() {
    /**
     * Using inline styles as they depend on
     * runtime constant width.
     *
     * Using inline styles for View as otherwise
     * alignItems won't be set properly.
     */
    const {width} = Dimensions.get('window');
    /**
     * Locale is set in order to have 24 hour-formatted
     * time in picker.
     */
    return (
      <View style={{alignItems: 'center'}}>
        <SelectField
          onPress={this.onPress}
          label={this.formatTime(this.state.selectedTime)} />
        {this.state.pressed &&
          <DatePickerIOS
            style={{flex: 1, height: width, width: width}}
            mode={'time'}
            minuteInterval={5}
            locale={'ru-RU'}
            date={this.state.selectedTime}
            onDateChange={this.onTimeChange} />
        }
      </View>
    );
  }
}
