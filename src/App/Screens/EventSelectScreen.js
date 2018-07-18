import React, {Component} from 'react';
import {StyleSheet, View, ListView} from 'react-native';
import {Redirect} from 'react-router';

import {NavigationScreen} from 'Navigation';
import {events, auth} from 'Components/Api';
import {SearchField, BigListView, LightButton} from 'Components';

/**
 * Event selection screen.
 */
export default class EventSelectScreen extends Component {
  /**
   * @param {Props} props - the props.
   */
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=>r1!==r2,
      sectionHeaderHasChanged: (r1, r2)=>r1!==r2,
    });
    this.state = {
      userId: undefined,
      joinedEvents: this.ds.cloneWithRowsAndSections({}),
      selectedEvent: null,
      createEvent: false,
    };
    this.onCreateEventPress = this.onCreateEventPress.bind(this);
  }

  /**
   * fetch current userId and joined events for current user
   */
  componentDidMount() {
    auth.getCurrentUserId().then(this.updateUserId.bind(this));
    events.getEvents().then(this.addJoinedEvents.bind(this));
  }

  /**
   * set this.state.userId to current user id
   * @param {JSON} response - response from backend
   */
  updateUserId(response) {
    if (response === null) {
      return;
    }
    this.setState({userId: response.user_id});
  }

  /**
   * initialize this.state.joinedEvents datasource with
   * user's joined events
   * @param {Array} events - response from backend
   */
  addJoinedEvents(events) {
    const eventsArray =
      bigListViewFriendlyEventsFromBackendResponse(events).bind(this);
    this.setState({
      dataSource: this.ds.cloneWithRowsAndSections({
        'События': eventsArray,
      }),
    });
  }

  /**
   * make events BigListView-friendly, i.e. chronologically
   * sort them and set members to be used by BigListView
   * @param {Array} events - response from backend
   * @return {Array} BigListView-friendly events
   */
  bigListViewFriendlyEventsFromBackendResponse(events) {
    const sortedEvents = chronologicallySortEvents(events);
    return sortedEvents.map((event) => ({
      title: event.name.substring(event.name.indexOf(':') + 1),
      subtitle: this.formatTime(
        new Date(event.time_from * 1000), // as Date uses timestamp
        new Date(event.time_to * 1000) //    in milliseconds
      ),
      onPress: this.generateSetSelectedEvent(event.event_id).bind(this),
    }));
  }

  /**
   * @param {Array} events - backend response
   * @return {Array} sorted events sorted in chronological order
   */
  chronologicallySortEvents(events) {
    return events.sort((event1, event2) =>
      (event1.time_from - event2.time_from));
  }

  /**
   * @param {Date} timeFrom - start time
   * @param {Date} timeTo - end time
   * @return {String} "DD.MM HH:MM - HH:MM" formated time of event
   */
  formatTime(timeFrom, timeTo) {
    const day = timeFrom.getDate();
    const month = timeFrom.getMonth() < 9 ?
      '0' + (timeFrom.getMonth() + 1) : timeFrom.getMonth() + 1;
    const hoursFrom = timeFrom.getHours() < 10 ?
      '0' + timeFrom.getHours() : timeFrom.getHours();
    const minutesFrom = timeFrom.getMinutes() < 10 ?
      '0' + timeFrom.getMinutes() : timeFrom.getMinutes();
    const hoursTo = timeTo.getHours() < 10 ?
      '0' + timeTo.getHours() : timeTo.getHours();
    const minutesTo = timeTo.getMinutes() < 10 ?
      '0' + timeTo.getMinutes() : timeTo.getMinutes();

    return '' + day + '.' + month + ' ' +
      hoursFrom + ':' + minutesFrom + ' - ' +
      hoursTo + ':' + minutesTo;
  }

  /**
   * @param {String} eventId - id of selected event
   * @return {Function} function, which sets this.state.selectedEvent
   */
  generateSetSelectedEvent(eventId) {
    return () => {
      this.setState({selectedEvent: eventId});
    };
  }

  /**
   * Create event button press handler.
   */
  onCreateEventPress() {
    this.setState({createEvent: true});
  }

  /**
   * @return {React.Node} A screen with search field and list.
   */
  render() {
    if (this.state.selectedEvent !== null) {
      return <Redirect push to={`/event/${this.state.selectedEvent}`}/>;
    }
    if (this.state.createEvent) {
      return <Redirect push to={'/eventcreation'}/>;
    }
    return (
      <NavigationScreen title={'Пары'} hamburger>
        <View style={style.Container}>
          <SearchField />
          <View style={style.Separator}/>
          <BigListView
            dataSource={this.state.joinedEvents}
            withHeaders={true}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <LightButton
            label={'Создать событие'}
            onPress={this.onCreateEventPress}
            style={{width: 180}}/>
        </View>
      </NavigationScreen>
    );
  }
}

const style = StyleSheet.create({
  Container: {
    top: 15,
  },
  Separator: {
    height: 10,
  },
});
