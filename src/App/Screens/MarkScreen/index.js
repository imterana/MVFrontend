import React, {Component} from 'react';
import {View} from 'react-native';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import {NavigationScreen} from 'Navigation';
import {events, profile, websocketHost} from 'Components/Api';

import ListSubscreen from './ListSubscreen';
import MarkSubscreen from './MarkSubscreen';


/**
 * A screen for marking the students. Incorporates both people list screen
 * and the marking one.
 */
class EventMarkScreen extends Component {
  /**
   * @param {Props} props - the props.
   */
  constructor(props) {
    super(props);
    this.eventId = this.props.match.params.eventId;
    this.matchUrl = this.props.match.url;
    this.replaceUserList = this.replaceUserList.bind(this);
    this.addUserToList = this.addUserToList.bind(this);
    this.removeUserFromList = this.removeUserFromList.bind(this);
    this.onSocketOpened = this.onSocketOpened.bind(this);
    this.onSocketClosed = this.onSocketClosed.bind(this);
    this.onSocketMessage = this.onSocketMessage.bind(this);
    this.confirmUserMarking = this.confirmUserMarking.bind(this);
    this.prepareUserMarking = this.prepareUserMarking.bind(this);
    this.refuseUserMarking = this.refuseUserMarking.bind(this);
    this.state = {
      users: [],
      selectedUser: null,
      title: null,
    };
  }

  /**
   * Strips event title from the full name and updates the state.
   * @param {JSON} response - api response with event info
   */
  getEventName(response) {
    if (response === null) {
      return;
    }
    const name = response.name.substring(response.name.indexOf(':') + 1);
    this.setState({
      ...this.state,
      title: name,
    });
  }

  /**
   * Fetches the event name, opens the websocket and adds listeners.
   */
  componentDidMount() {
    this.socket = new WebSocket(
      `ws:\/\/${websocketHost}:8080/ws/marking?event_id=${this.eventId}`
    );
    this.socket.addEventListener('open', this.onSocketOpened);
    this.socket.addEventListener('close', this.onSocketClosed);
    this.socket.addEventListener('message', this.onSocketMessage);
    events.getEventByID({
      event_id: this.eventId,
    }).then(this.getEventName.bind(this))
      .catch((err) => {
        alert(err.message);
      });
  }

  static propTypes = {
    history: PropTypes.object,
    match: PropTypes.any,
  }

  /**
   * Callback for opening the websocket.
   * @param {Object} event - the event.
   */
  onSocketOpened(event) {
    console.log('Socket opened');
  }

  /**
   * Callback for closing the websocket.
   * @param {Object} event - the event.
   */
  onSocketClosed(event) {
    console.log('Socket closed');
  }

  /**
   * Callback for receiving a message from the websocket.
   * @param {Object} event - the event.
   */
  onSocketMessage(event) {
    const data = JSON.parse(event.data);
    console.log('Message', data);
    switch (data.message) {
      case 'marking_list':
        this.replaceUserList(data.params.marking_list);
        break;
      case 'user_joined':
        this.addUserToList(data.params.user_id);
        break;
      case 'user_left':
        this.removeUserFromList(data.params.user_id);
        break;
      case 'prepared':
        switch (data.result) {
          case 'ok':
            break;
          case 'denial':
            alert('Не удалось занять пользователя');
            this.goBack();
            break;
          case 'error':
            alert(data.error_msg);
            this.goBack();
            break;
        };
        break;
      case 'marked':
        switch (data.result) {
          case 'ok':
            alert(data.display_msg);
            break;
          case 'denial':
            alert('Не удалось отметить пользователя');
            this.resetUser();
            break;
          case 'error':
            alert(data.error_msg);
            this.resetUser();
            break;
        };
        break;
      default:
        switch (data.result) {
          case 'ok':
            break;
          case 'denial':
            break;
          case 'error':
            alert(data.error_msg);
            this.goBack();
            break;
          default:
            alert(data.result);
            break;
        }
    }
  }

  /**
   * Discards current users, replaces them with new ones.
   * @param {Array} list - new user ids.
   */
  replaceUserList(list) {
    list.forEach((userId) => {
      this.addUserToList(userId);
    });
  }

  /**
   * Fetches information for given user and adds it to the list.
   * @param {String} userId - new user's id.
   */
  addUserToList(userId) {
    profile.getProfile({user_id: userId}).then((response) => {
      this.setState({
        ...this.state,
        users: [
          ...this.state.users,
          {
            photo: response.pic,
            name: response.display_name,
            bio: response.bio,
            confirmed: response.confirmed,
            userId: userId,
          },
        ],
      });
    });
  }

  /**
   * Removes the user from the list.
   * @param {String} userId - user's id.
   */
  removeUserFromList(userId) {
    console.log(this.state);
    this.setState({
      ...this.state,
      users: this.state.users.filter((user) => (user.userId != userId)),
    });
  }

  /**
   * Go back in browser history.
   */
  goBack() {
    this.props.history.goBack();
  }

  /**
   * Unselect a user.
   */
  resetUser() {
    this.setState({
      ...this.state,
      selectedUser: null,
    });
  }

  /**
   * Sends a message to confirm marking the user.
   * @param {String} userId - user id of marked user.
   */
  confirmUserMarking(userId) {
    const message = {
      message: 'confirm_marking',
      params: {
        user_id: userId,
      },
    };
    this.socket.send(JSON.stringify(message));
    this.setState({
      ...this.state,
      users: this.state.users.filter((user) => (user.userId != userId)),
      selectedUser: null,
    });
  }

  /**
   * Sends a message to prepare a user for marking.
   * @param {String} userId - user id.
   */
  prepareUserMarking(userId) {
    const message = {
      message: 'prepare_to_mark',
      params: {
        user_id: userId,
      },
    };
    this.socket.send(JSON.stringify(message));
    this.setState({
      ...this.state,
      selectedUser: this.state.users.find((user) => (user.userId == userId)),
    });
  }

  /**
   * Sends a message to refuse to mark the user.
   * @param {String} userId - user id.
   */
  refuseUserMarking(userId) {
    const message = {
      message: 'refuse_to_mark',
      params: {
        user_id: userId,
      },
    };
    this.socket.send(JSON.stringify(message));
    this.setState({
      ...this.state,
      selectedUser: null,
    });
  }

  /**
   * Appends the onPress events to users for the table.
   * @return {List} - users with onPress events.
   */
  usersWithOnPress() {
    return this.state.users.map((user) => ({
      ...user,
      onPress: (e)=>(this.prepareUserMarking(user.userId)),
    }));
  }

  /**
   * A function called when the component is being unmounted.
   */
  componentWillUnmount() {
    this.socket.close();
  }

  /**
   * @return {React.Node} A screen with avatar.
   */
  render() {
    const {selectedUser, users, title} = this.state;
    return (
      <NavigationScreen title={title}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={{'height': '100%', 'width': '100%'}}>
            {
              selectedUser != null ?
                  <MarkSubscreen
                    {...selectedUser}
                    onConfirm={
                      ()=>(this.confirmUserMarking(selectedUser.userId))
                    }
                    onDeny={
                      ()=>(this.refuseUserMarking(selectedUser.userId))
                  }/>
                : <ListSubscreen users={this.usersWithOnPress(users)} />
            }
          </View>
        </View>
      </NavigationScreen>
    );
  }
}

export default withRouter(EventMarkScreen);
