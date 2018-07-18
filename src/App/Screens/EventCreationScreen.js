import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Redirect} from 'react-router';

import {NavigationScreen} from '../Navigation';
import {
  InputField,
  DateSelect,
  TimeSelect,
  LightButton,
} from '../Components';
import {TitleText} from '../Components/Text';
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
      title: '',
      date: new Date(),
      timeFrom: new Date(),
      timeTo: new Date(),
      redirect: null,
    };

    this.handleStreamChange = this.handleStreamChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onStartTimeChange = this.onStartTimeChange.bind(this);
    this.onEndTimeChange = this.onEndTimeChange.bind(this);
    this.composeEventNameFromStreamAndTitle =
      this.composeEventNameFromStreamAndTitle.bind(this);
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
    this.setState({timeFrom: newStartTime});
  }

  /**
   * @param {Date} newEndTime - new selected end time
   */
  onEndTimeChange(newEndTime) {
    newEndTime = new Date(newEndTime);
    this.setState({timeTo: newEndTime});
  }

  /**
   * @return {String} event name from stream and title
   */
  composeEventNameFromStreamAndTitle() {
    return this.state.stream + ':' + this.state.title;
  }

  /**
   * @param {Date} date - date
   * @param {Date} time - time
   * @return {Number} timestamp - time in seconds since Jan 01, 1970
   */
  unixTimestampFromDateAndTime(date, time) {
    date = dateWithHoursAndMinutesAccordingToTime(date, time);
    return Math.floor(date.valueOf() / 1000); // as JS Date uses timestamp in ms
  }

  /**
   * @param {Date} date - date
   * @param {Date} time - time
   * @return {Date} date with hours and minutes set according to time
   */
  dateWithHoursAndMinutesAccordingToTime(date, time) {
    date.setHours(time.getHours());
    date.setMinutes(time.getMinutes());
    return date;
  }

  /**
   * Create event button press handler.
   */
  createEvent() {
    if (this.state.timeTo <= this.state.timeFrom) {
      alert('Время окончания события должно быть больше времения начала.');
      return;
    }
    const eventName = composeEventNameFromStreamAndTitle();
    const timeFrom = unixTimestampFromDateAndTime(
      this.state.date, this.state.timeFrom);
    const timeTo = unixTimestampFromDateAndTime(
      this.state.date, this.state.timeTo);
    events.createEvent({
      name: eventName,
      time_from: timeFrom,
      time_to: timeTo,
    }).then((res) => {
      this.setState({
        ...this.state,
        redirect: res.event_id,
      });
    }).catch((err) => {
      alert(err.message);
    });
  }

  /**
   * @return {React.Node} event creation screen
   */
  render() {
    const {redirect} = this.state;
    return (
      <NavigationScreen title={'Создание пары'}>
        <View style={styles.eventCreationContainer}>
        {redirect && <Redirect to={`/event/${redirect}`} />}
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
                  Дата
                </TitleText>
              </View>
              <View style={styles.selectContainer}>
                <DateSelect onDateChange={this.onDateChange}/>
              </View>
              </View>
            <View style={{flexDirection: 'row', paddingTop: 10}}>
              <View style={styles.titleContainer}>
                <TitleText
                  style={styles.titleStyle}>
                  Начало
                </TitleText>
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
          <LightButton
              label={'Создать'}
              onPress={this.createEvent}
              disabled={!this.state.title}/>
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
});
