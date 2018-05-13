import React from 'react';
import {StyleSheet, View} from 'react-native';
import moment from 'moment';

import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

import BaseTimeSelect from './BaseTimeSelect';

/**
 * Web time select component.
 */
export default class TimeSelect extends BaseTimeSelect {
  /**
   * Change moment to Date and pass it to callback.
   * @param {moment} newTime - new choosen time
   */
  onTimeChange(newTime) {
    /**
     * If cross is pressed, value is cleared and
     * null is passed here.
     */
    if (newTime) {
      newTime = newTime.toDate();
      this.props.onTimeChange(newTime);
    }
  }

  /**
   * @return {React.Node} styled date picker
   */
  render() {
    defaultValue = moment(this.props.selectedTime);
    return (
      <View style={styles.pickerContainer}>
        <TimePicker
          defaultValue={defaultValue}
          onChange={this.onTimeChange}
          minuteStep={5}
          showSecond={false} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 0,
    height: 25,
    width: 80,
  },
});
