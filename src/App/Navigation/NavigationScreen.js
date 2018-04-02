import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {withRouter} from 'react-router-dom';

import {NavButton} from '../Components';

import {NavigationBar} from './NavigationBar';
import SideBar from './SideBar';

/**
 * A component responsible for rendering the entire
 * navigation UI around provided content.
 * @class NavigationScreen
 */
class NavigationScreen extends Component {
  static contextTypes = {
    router: () => null,
  }

  static propTypes = {
    /* Main UI content */
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    /**
     * Whether the page contains hamburger menu button or back button
     * in the navigation bar.
     */
    hamburger: PropTypes.bool,
    /**
     * Optional control to be placed on the right end of the
     * navigation bar.
     */
    rightControl: PropTypes.element,
    /**
     * Title of the navigation bar.
     */
    title: PropTypes.string,
  }

  static defaultProps = {
    hamburger: false,
    title: 'A page',
  }

  /**
   * @param {Props} props - the props.
   */
  constructor(props) {
    super(props);
    this.state = {
      hamburgerMenuVisible: false,
    };
  }

  /**
   * Determines the handler for the left control of the navigation bar:
   * either hamburger menu toggle or the go back in history action.
   * @return {function} A left control click handler.
   */
  leftControlAction() {
    if (this.props.hamburger) {
      return this.onHamburgerPress.bind(this);
    } else {
      return this.context.router.history.goBack;
    }
  }

  /**
   * Draws the navigation bar with corresponding controls.
   * @return {React.Node} A navigation bar component
   */
  navBar() {
    const leftFunction = this.leftControlAction();
    const rightControl = this.props.rightControl;
    return (
      <NavigationBar
        leftControl={
          <NavButton onPress={leftFunction}/>
        }
        title={this.props.title}
        rightControl={rightControl}
      />
    );
  }

  /**
   * Toggles hamburger menu visibility.
   */
  onHamburgerPress() {
    this.setState((prevState, props) => ({
      ...prevState,
      hamburgerMenuVisible: !prevState.hamburgerMenuVisible,
    }));
  }

  /**
   * @return {React.Node} Content wrapped in a navigation container.
   */
  render() {
    const {hamburgerMenuVisible} = this.state;
    return (
      <View style={style.controllerContainer}>
          { hamburgerMenuVisible && <SideBar /> }
          <View style={{flex: 1}}>
            {this.navBar(this.props)}
            <View style={{flex: 1, bottom: 0}}>
              {this.props.children}
            </View>
          </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  controllerContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
});

export default withRouter(NavigationScreen);
