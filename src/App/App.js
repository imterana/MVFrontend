import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {Redirect, Route, Switch} from 'react-router';
import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';

import Router from 'Router';
import {markAsVisited} from 'Reducers';
import {setUserId} from 'Actions';
import {auth} from 'Components/Api';

import {
    AboutScreen,
    AvatarScreen,
    ButtonScreen,
    CheckboxScreen,
    DetailsScreen,
    EventCreationScreen,
    EventScreen,
    EventSelectScreen,
    FriendListScreen,
    HomeScreen,
    InputFieldScreen,
    KarmaCircleScreen,
    ListScreen,
    LoginScreen,
    MarkScreen,
    SelectScreen,
} from './Screens';


const store = createStore(markAsVisited);

/**
 * The primary app component. Responsible for setting the logged in state and
 * rendering the loading screen.
 * @class AppContainer
 */
class AppContainer extends Component {
  static propTypes = {
    setUserId: PropTypes.Function,
    userId: PropTypes.Number,
  }

  /**
   * Set the logged in state for user.
   */
  componentDidMount() {
    auth.getCurrentUserId().then((response)=>{
      const userId = response != null ? response.user_id : null;
      this.props.setUserId(userId);
    });
  }

  /**
   * @return  {React.Node} Router with all possible top-level routes in it.
   */
  render() {
    const {userId} = this.props;
    if (userId === undefined) {
      return null;
    }
    const shouldRedirectToLogin = userId === null;
    return (
      <Router>
        <Switch>
          <View style={styles.container}>
            <Route exact path="/" render={()=><Redirect to='/home' />} />
            <Route path='/about' component={AboutScreen} />
            <Route path='/avatar' component={AvatarScreen} />
            <Route path='/button' component={ButtonScreen} />
            <Route path='/checkbox' component={CheckboxScreen} />
            <Route path='/details' component={DetailsScreen} />
            <Route path='/event/:eventId' component={EventScreen} />
            <Route path='/eventcreation' component={EventCreationScreen}/>
            <Route path='/eventselect' component={EventSelectScreen} />
            <Route path='/friendlist' component={FriendListScreen}/>
            <Route path='/home' component={HomeScreen} />
            <Route path='/inputfield' component={InputFieldScreen} />
            <Route path='/karmacircle' component={KarmaCircleScreen} />
            <Route path='/list' component={ListScreen} />
            <Route path='/login' render={() => (userId ? <Redirect to='/' />
                                                       : <LoginScreen />)} />
            <Route path='/markscreen' component={MarkScreen}/>
            <Route path='/select' component={SelectScreen} />
            {shouldRedirectToLogin && <Redirect to='/login' />}
          </View>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.userId,
});

const mapDispatchToProps = (dispatch) => ({
  setUserId: (userId) => {
    dispatch(setUserId(userId));
  },
});

const ConnectedAppContainer = connect(mapStateToProps,
                                      mapDispatchToProps)(AppContainer);

const StoreWrapper = () => (
  <Provider store={store}>
    <ConnectedAppContainer />
  </Provider>
);

export default StoreWrapper;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
});
