import React, {Component} from 'react';
import {Redirect, Route} from 'react-router';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

import Router from 'Router';

import AvatarDemoScreen from './AvatarDemoScreen';
import ButtonDemoScreen from './ButtonDemoScreen';
import CheckboxDemoScreen from './CheckboxDemoScreen';
import DemoIndexScreen from './DemoIndexScreen';
import EventSelectDemoScreen from './EventSelectDemoScreen';
import FriendListDemoScreen from './FriendListDemoScreen';
import InputFieldDemoScreen from './InputFieldDemoScreen';
import KarmaCircleDemoScreen from './KarmaCircleDemoScreen';
import ListDemoScreen from './ListDemoScreen';
import LongTextDemoScreen from './LongTextDemoScreen';
import SelectDemoScreen from './SelectDemoScreen';
import MarkDemoScreen from './MarkDemoScreen';

const demoScreens = [
  {
    url: 'avatar',
    component: AvatarDemoScreen,
  },
  {
    url: 'button',
    component: ButtonDemoScreen,
  },
  {
    url: 'checkbox',
    component: CheckboxDemoScreen,
  },
  {
    url: 'eventselect',
    component: EventSelectDemoScreen,
  },
  {
    url: 'friendlist',
    component: FriendListDemoScreen,
  },
  {
    url: 'inputfield',
    component: InputFieldDemoScreen,
  },
  {
    url: 'karmacircle',
    component: KarmaCircleDemoScreen,
  },
  {
    url: 'list',
    component: ListDemoScreen,
  },
  {
    url: 'longtext',
    component: LongTextDemoScreen,
  },
  {
    url: 'select',
    component: SelectDemoScreen,
  },
  {
    url: 'mark',
    component: MarkDemoScreen,
  },
];

/**
 * A router that handles demo screens.
 */
export default class DemoRouter extends Component {
  /**
   * Transfroms paths from relative to absolute based on routing path.
   * @param {Props} props - the props.
   */
  constructor(props) {
    super(props);
    const {path} = this.props.match;
    this.routes = demoScreens.map(
      ({url, ...other}) => ({
        name: `${url}`,
        url: `${path}${url}`,
        ...other,
      })
    );
    console.log(this.routes);
  }

  static propTypes = {
    match: PropTypes.object,
  };

  /**
   * @return {React.Node} A router with all the routes for demo screens.
   */
  render() {
    const {path} = this.props.match;
    const indexPath = `${path}index`;
    return (
      <Router>
        <View style={styles.container}>
          <Route exact path={path}
            render={()=>(<Redirect to={indexPath} />)} />
          <Route
            path={indexPath}
            render={() => (<DemoIndexScreen routes={this.routes} />)}
          />
          {this.routes.map((route) => (
            <Route
              key={route.url}
              path={route.url}
              component={route.component}
            />))}
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
});
