import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {NavigationScreen} from '../Navigation';
import {Button, InputField} from '../Components';
import {DefaultText, TitleText} from '../Components/Text';
import StyleConstants from "../StyleConstants";

/**
 * Pair creation screen.
 */
export default class PairCreationScreen extends Component {
  /**
   * @param {Props} props - the props
   */
  constructor(props) {
    super(props);
    this.state = {
      stream: '',
      name: '',
      date: new Date(),
      startTime: new Date(),
      endTime: new Date(),
    };

    this.handleStreamChange = this.handleStreamChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  /**
   * @param {event} event - change event
   */
  handleStreamChange(event) {
    this.setState({stream: event.target.value});
  }

  /**
   * @param {event} event - change event
   */
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  /**
   * @return {React.Node} pair creation screen
   */
  render() {
    return (
      <NavigationScreen>
        <View style={styles.pairCreationContainer}>
          <View>
            <InputField
              placeholder={'Поток'}
              handleChange={this.handleStreamChange} />
          </View>
          <View style={{paddingTop: 10}}>
            <InputField
              placeholder={'Физика, лекция'}
              handleChange={this.handleNameChange} />
          </View>
          <View style={{paddingTop: 50, paddingLeft: 5}}>
            <View style={{flexDirection: 'row'}}>
              <TitleText
                style={styles.titleStyle}>
                Начало
              </TitleText>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TitleText
                style={styles.titleStyle}>
                Конец
              </TitleText>
            </View>
          </View>
        </View>
      </NavigationScreen>
    );
  }
}

const styles = StyleSheet.create({
  pairCreationContainer: {
    top: 20,
    flex: 0,
  },
  titleStyle: {
    color: StyleConstants.ALT_BACKGROUND_COLOR,
    fontSize: 25,
  },
});
