import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {NavigationScreen} from '../Navigation';
import {Button} from '../Components';

/**
 * Button example screen.
 * Made only to demonstrate button.
 */
export default class ButtonScreen extends Component {
  /**
   * @param {Props} props - the props.
   * Constructor, adds state attribute with count.
   */
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  /**
   * Increments state.count.
   */
  onButtonPress() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  /**
   * @return {React.Node} A screen with button.
   */
  render() {
    onPressFunction = this.onButtonPress.bind(this);
    return (
      <NavigationScreen>
        <View style={style.buttonContainer}>
          <Button
            label='button'
            onPress={onPressFunction}
            background='blue' />
        </View>
        <View style={style.countContainer}>
          <Text>
            {this.state.count !== 0 ? this.state.count: null}
          </Text>
        </View>
        <View style={style.rowButtons}>
          <Button
            label='button1'
            onPress={onPressFunction}
            background='green' />
          <Button
            label='button2'
            onPress={onPressFunction}
            background='red' />
        </View>
      </NavigationScreen>
    );
  }
}

const style = StyleSheet.create({
  buttonContainer: {
    top: 10,
    flex: 0,
    height: 50,
  },
  countContainer: {
    top: 10,
    alignItems: 'center',
    padding: 10,
  },
  rowButtons: {
    top: 10,
    flex: 1,
    flexDirection: 'row',
  },
});
