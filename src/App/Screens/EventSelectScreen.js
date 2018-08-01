import React, {Component} from 'react';
import {StyleSheet, View, ListView} from 'react-native';
import {Redirect} from 'react-router';

import {NavigationScreen} from 'Navigation';
import {events} from 'Components/Api';
import {SearchField, BigListView, LightButton} from 'Components';
import {formatEventTime} from 'Misc';

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
      joinedEvents: this.ds.cloneWithRowsAndSections({}),
      selectedEvent: null,
      createEvent: false,
    };
    this.onCreateEventPress = this.onCreateEventPress.bind(this);
  }


  /**
   * Fetch joined events for current user.
   */
  componentDidMount() {
    events.getEvents().then(this.addJoinedEvents.bind(this));
  }

  /**
   * Initialize this.state.joinedEvents datasource with
   * user's joined events.
   * @param {Array} events - response from backend
   */
  addJoinedEvents(events) {
    const eventsArray =
      this.bigListViewFriendlyEventsFromBackendResponse(events);
    this.setState({
      joinedEvents: this.ds.cloneWithRowsAndSections({
        'События': eventsArray,
      }),
    });
  }

  /**
   * Make events BigListView-friendly, i.e. chronologically
   * sort them and set members to be used by BigListView.
   * @param {Array} events - response from backend
   * @return {Array} BigListView-friendly events
   */
  bigListViewFriendlyEventsFromBackendResponse(events) {
    const sortedEvents = this.chronologicallySortEvents(events);
    return sortedEvents.map((event) => ({
      title: event.name.substring(event.name.indexOf(':') + 1),
      subtitle: formatEventTime(
        new Date(event.time_from * 1000), // as Date uses timestamp
        new Date(event.time_to * 1000) //    in milliseconds
      ),
      onPress: this.generateSetSelectedEvent(event.event_id).bind(this),
    }));
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
   * @param {Array} events - backend response
   * @return {Array} sorted events sorted in chronological order
   */
  chronologicallySortEvents(events) {
    return events.sort((event1, event2) =>
      (event1.time_from - event2.time_from));
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
    const {selectedEvent, createEvent, joinedEvents} = this.state;
    if (selectedEvent !== null) {
      return <Redirect push to={`/event/${selectedEvent}`}/>;
    }
    if (createEvent) {
      return <Redirect push to={'/eventcreation'}/>;
    }
    return (
      <NavigationScreen title={'Пары'} hamburger>
        <View style={style.Container}>
          <SearchField />
          <View style={style.Separator}/>
          <BigListView
            dataSource={joinedEvents}
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
