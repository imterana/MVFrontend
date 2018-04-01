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
            styleName='redBack' />
          <View style={style.countContainer}>
            <Text>
              {this.state.count !== 0 ? this.state.count: null}
            </Text>
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
});
