import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {NavigationScreen} from '../Navigation';
import {Button, ButtonRow} from '../Components';

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
            {this.state.count !== 0 ? this.state.count : null}
          </Text>
        </View>
        <ButtonRow
          greenLabel='green button'
          onGreenPress={onPressFunction}
          redLabel='red button'
          onRedPress={onPressFunction} />
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
    alignItems: 'center',
    padding: 10,
  },
});
