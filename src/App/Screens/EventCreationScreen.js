import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import {NavigationScreen} from '../Navigation';
import {
  InputField,
  DateSelect,
  TimeSelect,
} from '../Components';
import {DefaultText, TitleText} from '../Components/Text';
import {events} from '../Components/Api';
import StyleConstants from '../StyleConstants';

/**
 * Event creation screen.
 */
export default class EventCreationScreen extends Component {
  /**
   * @param {Props} props - the props
   */
  constructor(props) {
    super(props);
    this.state = {
      stream: '',
      name: '',
      date: new Date(),
      startTime: new Date(),
      endTime: new Date(),
    };

    this.handleStreamChange = this.handleStreamChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onStartTimeChange = this.onStartTimeChange.bind(this);
    this.onEndTimeChange = this.onEndTimeChange.bind(this);
    this.createEvent = this.createEvent.bind(this);
  }

  /**
   * @param {event} event - change event
   */
  handleStreamChange(event) {
    this.setState({stream: event.target.value});
  }

  /**
   * @param {event} event - change event
   */
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  /**
   * @param {Date} newDate - new selected date
   */
  onDateChange(newDate) {
    newDate = new Date(newDate);
    this.setState({date: newDate});
  }

  /**
   * @param {Date} newStartTime - new selected start time
   */
  onStartTimeChange(newStartTime) {
    newStartTime = new Date(newStartTime);
    this.setState({startTime: newStartTime});
  }

  /**
   * @param {Date} newEndTime - new selected end time
   */
  onEndTimeChange(newEndTime) {
    newEndTime = new Date(newEndTime);
    this.setState({endTime: newEndTime});
  }

  /**
   * Create event button press handler.
   */
  createEvent() {
    if (this.state.endTime < this.state.startTime) {
      alert('Время окончания события должно быть больше времения начала.');
      return;
    }
    const eventName = this.state.stream + ':' + this.state.name;
    const timeFrom = Math.floor(this.state.startTime.valueOf() / 1000);
    const timeTo = Math.floor(this.state.endTime.valueOf() / 1000);
    events.createEvent({
      name: eventName,
      time_from: timeFrom,
      time_to: timeTo,
    }).catch((err) => {
      alert(err.message);
    });
  }

  /**
   * @return {React.Node} event creation screen
   */
  render() {
    return (
      <NavigationScreen title={'Создание пары'}>
        <View style={styles.eventCreationContainer}>
          <View>
            <InputField
              placeholder={'Поток'}
              handleChange={this.handleStreamChange}/>
          </View>
          <View style={{paddingTop: 10}}>
            <InputField
              placeholder={'Физика, лекция'}
              handleChange={this.handleNameChange}/>
          </View>
          <View style={styles.rowsContainer}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.titleContainer}>
                <TitleText
                  style={styles.titleStyle}>
                  Начало
                </TitleText>
              </View>
              <View style={styles.selectContainer}>
                <DateSelect onDateChange={this.onDateChange}/>
              </View>
              <View style={styles.selectContainer}>
                <TimeSelect onTimeChange={this.onStartTimeChange}/>
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 10}}>
              <View style={styles.titleContainer}>
                <TitleText
                  style={styles.titleStyle}>
                  Конец
                </TitleText>
              </View>
              <View style={styles.selectContainer}>
                <TimeSelect onTimeChange={this.onEndTimeChange}/>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 100}}>
            <TouchableOpacity
              onPress={this.createEvent}
              disabled={!this.state.name}
              style={styles.lightButtonContainer}>
              <DefaultText style={{color: StyleConstants.ALT_BACKGROUND_COLOR}}>
                Создать
              </DefaultText>
            </TouchableOpacity>
          </View>
        </View>
      </NavigationScreen>
    );
  }
}

const styles = StyleSheet.create({
  eventCreationContainer: {
    top: 20,
    flex: 0,
  },
  rowsContainer: {
    paddingTop: 50,
    paddingLeft: 5,
  },
  titleStyle: {
    color: StyleConstants.ALT_BACKGROUND_COLOR,
    fontSize: 20,
  },
  titleContainer: {
    flex: 0,
    /**
     * width found out empirically, so
     * that it allows to write 'Начало'
     * in one row
     */
    width: 90,
  },
  selectContainer: {
    flex: 0,
    width: 120,
    paddingLeft: 40,
  },
  lightButtonContainer: {
    flex: 0,
    width: 120,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: StyleConstants.BORDER_RADIUS,
    borderColor: StyleConstants.BORDER_COLOR,
    borderWidth: 1,
  },
});
