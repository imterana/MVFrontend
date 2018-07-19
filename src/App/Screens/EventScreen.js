import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, ListView} from 'react-native';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Link} from 'RouterWrapper';
import {NavigationScreen} from 'Navigation';
import {events, profile, auth, websocketHost} from 'Components/Api';
import {AvatarView, Button, IconSymbol, SmallListView} from 'Components';
import {DefaultText, TitleText} from 'Components/Text';
import StyleConstants from 'StyleConstants';
import {formatEventDate} from 'Misc';

/**
 * Event screen.
 */
export default class EventScreen extends Component {
  static propTypes = {
    match: PropTypes.any,
  }

  /**
   * @param {Props} props - the props
   */
  constructor(props) {
    super(props);
    /**
     * eventId is part of path: '/event/:eventId', hence
     * reachable through props.match.params
     */
    const eventId = props.match.params.eventId;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      eventId: eventId,
      eventName: 'NoName',
      date: new Date(),
      timeFrom: new Date(),
      timeTo: new Date(),
      creator: {
        name: 'NoName',
        userId: undefined,
        photo: null,
        isVerified: false,
      },
      userId: null,
      removed: false,
      controlPanelDataSource: ds.cloneWithRows([
        {
          title: 'Удалить пару',
          subtitle: null,
          onPress: this.removeEvent.bind(this),
        },
      ]),
    };

    this.onRequestMarkPress = this.onRequestMarkPress.bind(this);
    this.onSocketMessage = this.onSocketMessage.bind(this);
    this.updateUserId = this.updateUserId.bind(this);
    this.parseEventData = this.parseEventData.bind(this);
  }

  /**
   * Fetch current userId and event info.
   */
  componentDidMount() {
    events.getEventByID({
      event_id: eventId,
    }).then(this.parseEventData)
      .catch((err) => {
        alert(err.message);
      });
    auth.getCurrentUserId().then(this.updateUserId);
  }

  /**
   * Parses event data and stores it in this.state.
   * @param {JSON} event - event data
   */
  parseEventData(event) {
    if (event === null) {
      return;
    }
    fetchCreatorInfo(event);
    const eventName = removeStreamPrefixFrom(event.name);
    this.setState({
      ...this.state,
      eventName: eventName,
      date: new Date(event.time_from * 1000),
      timeFrom: new Date(event.time_from * 1000),
      timeTo: new Date(event.time_to * 1000),
    });
  }

  /**
   * @param {JSON} event - event data
   */
  fetchCreatorInfo(event) {
    profile.getProfile({
      user_id: event.creator_id,
    }).then(this.generateUpdateCreator(event.creator_id).bind(this));
  }

  /**
    * Removing 'stream:...' prefix.
    * @param {String} eventName - event name in stream:title format
    * @return {String} event title (name without stream prefix)
    */
  removeStreamPrefixFrom(eventName) {
    return eventName.substring(event.name.indexOf(':') + 1);
  }

  /**
   * @param {id} creatorId - creator id
   * @return {Function} function, which updates this.state.creator
   * and knows creatorId, as there is none in api response
   */
  generateUpdateCreator(creatorId) {
    return (creator) => {
      if (creator == null) {
        return;
      }
      this.setState({
        ...this.state,
        creator: {
          userId: creatorId,
          name: creator.display_name,
          photo: creator.pic,
          isVerified: creator.confirmed,
        },
      });
    };
  }

  /**
   * @param {JSON} response - server response with user id
   */
  updateUserId(response) {
    if (response === null) {
      return;
    }
    this.setState({
      ...this.state,
      userId: response.user_id,
    });
  }

  /**
   * Opens web socket.
   */
  onRequestMarkPress() {
    this.socket = new WebSocket(
      `ws:\/\/${websocketHost}:8080/ws/mark_me?event_id=${this.state.eventId}`
    );
    this.socket.addEventListener('message', this.onSocketMessage);
  }

  /**
   * Ready to mark button handler, redirects to event marking page.
   */
  onReadyPress() {
    this.setState({
      ...this.state,
      redirect: `/mark/${this.state.eventId}`,
    });
  }

  /**
   * Socket message handler.
   * @param {JSON} event - socket event
   */
  onSocketMessage(event) {
    const data = JSON.parse(event.data);
    console.log(event.data);
    switch (data.result) {
      case 'marked':
        alert('Вас отметили! *_*');
        break;
      case 'error':
        alert(data.error_msg);
        break;
    }
  }

  /**
   * Removes event, when responding button is pressed.
   */
  removeEvent() {
    events.deleteEvent({
      event_id: this.state.eventId,
    }).catch((err) => alert(err.message));
    this.setState({
      ...this.state,
      removed: true,
    });
  }

  /**
   * @return {React.Node} event screen
   */
  render() {
    const {date, timeFrom, timeTo, removed, redirect} = this.state;
    if (removed) {
      return <Redirect push to={'/eventselect'}/>;
    }
    if (redirect) {
      return <Redirect push to={redirect}/>;
    }
    return (
      <NavigationScreen title={this.state.eventName}>
        <View style={styles.delimer}/>
        <View style={styles.dateContainer}>
          <TitleText style={{color: 'white'}}>
            {formatEventDate(date, timeFrom, timeTo)}
          </TitleText>
        </View>
        <Creator info={this.state.creator}/>
        <Link
          to={`/mark/${this.state.eventId}`}
          style={{textDecoration: 'none'}}>
          <View style={styles.readyToMarkContainer}>
            <Button label={'ГОТОВ ОТМЕТИТЬ'}
              onPress={this.onReadyPress.bind(this)}/>
          </View>
        </Link>
        <View style={styles.requestMarkContainer}>
          <Button label={'ОТМЕТЬТЕ МЕНЯ'} onPress={this.onRequestMarkPress}/>
        </View>
        {this.state.userId === this.state.creator.userId &&
          <View style={styles.controlPanelContainer}>
            <SmallListView
              title={'Управление'}
              dataSource={this.state.controlPanelDataSource}/>
          </View>
        }
      </NavigationScreen>
    );
  }
}

/**
 * Custom creator info display.
 */
class Creator extends Component {
  static propTypes = {
    info: PropTypes.object.isRequired,
  }

  /**
   * @return {React.Node} custom creator info display
   */
  render() {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.rowContainer}>
          <View style={styles.stick}/>
          <View style={styles.avatarContainer}>
            <AvatarView
              photo={this.props.info.photo}
              isVerified={this.props.info.isVerified}
              style={styles.avatarStyle}/>
          </View>
          <View style={styles.creatorNameContainer}>
            <DefaultText>
              {'Создатель: ' + this.props.info.name}
            </DefaultText>
          </View>
          <View style={styles.iconContainer}>
            <IconSymbol name='circle-right' style={styles.icon}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  delimer: {
    flex: 0,
    height: 1,
  },
  dateContainer: {
    flex: 0,
    height: 60,
    backgroundColor: StyleConstants.ALT_BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 5,
    borderColor: StyleConstants.BORDER_COLOR,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  stick: {
    backgroundColor: StyleConstants.ALT_BACKGROUND_COLOR,
    width: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  avatarContainer: {
    marginLeft: 10,
    height: 50,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarStyle: {
    height: 40,
    width: 40,
  },
  creatorNameContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  iconContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  icon: {
    color: StyleConstants.ALT_BACKGROUND_COLOR,
  },
  readyToMarkContainer: {
    marginTop: 30,
  },
  requestMarkContainer: {
    marginTop: 20,
  },
  controlPanelContainer: {
    marginTop: 20,
  },
});
