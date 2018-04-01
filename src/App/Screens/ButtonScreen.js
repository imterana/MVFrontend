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
          <Button
            label='button'
            onPress={onPressFunction}
            background='blue' />
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  rowButtons: {
    flex: 1,
    flexDirection: 'row',
  },
});
