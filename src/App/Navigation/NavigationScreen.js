import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Platform} from 'react-native';
import {withRouter} from 'react-router-dom';

import {IconSymbol} from 'Components';

import NavButton from './NavButton';
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
   * Determines if right control of navbar is a hamburger menu
   * or a "go back" button.
   * @return {Boolean} - if right control is a hamburger menu
   */
  shouldRenderHamburger() {
    return this.props.hamburger || Platform.OS === 'web';
  }

  /**
   * Determines the handler for the left control of the navigation bar:
   * either hamburger menu toggle or the go back in history action.
   * @return {function} A left control click handler.
   */
  leftControlAction() {
    if (this.shouldRenderHamburger()) {
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
        leftControl={(
          <NavButton onPress={leftFunction}>
            <View style={style.buttonContainer}>
              {this.shouldRenderHamburger()
                  ? <IconSymbol name='menu' style={style.symbol}/>
                  : <IconSymbol name='arrow-left2' style={style.symbol}/>}
            </View>
          </NavButton>
        )}
        title={this.props.title}
        rightControl={rightControl}
      />
    );
  }

  /**
   * Toggles hamburger menu visibility.
   */
  onHamburgerPress() {
    this.setState({
      ...this.prevState,
      hamburgerMenuVisible: !this.state.hamburgerMenuVisible,
    });
  }

  /**
   * @return {React.Node} Content wrapped in a navigation container.
   */
  render() {
    const {hamburgerMenuVisible} = this.state;
    return (
      <View style={style.controllerContainer}>
          {this.navBar()}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              overflow: hamburgerMenuVisible ? 'hidden' : 'visible',
            }}>
            { hamburgerMenuVisible && <SideBar /> }
            <View style={{
              bottom: 0,
              width: '100%',
            }}>
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
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
  symbol: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withRouter(NavigationScreen);
