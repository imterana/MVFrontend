import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { withRouter } from 'react-router-dom';

import Button from '../Button';

import { NavigationBar } from './NavigationBar';
import SideBar from './SideBar';

class NavigationScreen extends Component {

  static contextTypes = {
    router: () => true,
  }

  static defaultProps = {
    hamburger: false
  }

  constructor(props) {
    super(props);
    this.state = {
      hamburgerMenuVisible: false
    }
  }

  leftControlAction() {
    console.log(this.context.router.history);
    if (this.props.hamburger) {
      return this.onHamburgerPress.bind(this);
    } else {
      return this.context.router.history.goBack;
    }
  }

  NavBar() {
    const leftFunction = this.leftControlAction();
    const rightControl = this.props.rightControl;
    return <NavigationBar 
                leftControl={
                  <Button style={style.button} 
                    onPress={leftFunction} />
                }
                title={this.props.title} 
                rightControl={rightControl} />
  }

  onHamburgerPress() {
    this.setState((prevState, props) => ({
      ...prevState,
      hamburgerMenuVisible: !prevState.hamburgerMenuVisible
    }));
  }

  SideBar() {
  }

  render() {
    console.log("WFAWFSDFASDF");
    const { hamburgerMenuVisible } = this.state;
    return (
      <View style={style.controllerContainer}>
          { hamburgerMenuVisible && <SideBar /> }
          <View style={{ flex: 1 }}>
            {this.NavBar(this.props)}
            <View style={{ flex: 1, bottom: 0}}>
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
  button: {
    backgroundColor: 'yellow',
    height: 50,
    flex: 1
  }
});

export default withRouter(NavigationScreen);
