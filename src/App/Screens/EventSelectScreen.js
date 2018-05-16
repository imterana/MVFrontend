import React, {Component} from 'react';
import {StyleSheet, View, ListView} from 'react-native';
import {NavigationScreen} from '../Navigation';
import {SearchField, BigListView} from '../Components';

/**
 * Event selection screen.
 */
export default class EventSelectScreen extends Component {
  /**
   * @param {Props} props - the props.
   */
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=>r1!==r2,
      sectionHeaderHasChanged: (r1, r2)=>r1!==r2,
    });
    this.state = {
      dataSourceWithHeaders: ds.cloneWithRowsAndSections({
        'Найденные': [
          {
            title: 'Урматы, лекция',
            subtitle: 'сейчас',
            onPress: null,
          },
        ],
        'Все': [
          {
            title: 'Квантовая механика, семинар',
            subtitle: 'сегодня в 12.20',
            onPress: null,
          },
          {
            title: 'Парпрог, лекция',
            subtitle: 'завтра в 18.30',
            onPress: null,
          },
        ],
      }),
    };
  }
  /**
   * @return {React.Node} A screen with search field and list.
   */
  render() {
    return (
      <NavigationScreen>
        <View style={style.Container}>
          <SearchField />
          <View style={style.Separator}/>
          <BigListView
              dataSource={this.state.dataSourceWithHeaders}
              withHeaders={true}
          />
        </View>
      </NavigationScreen>
    );
  }
}

const style = StyleSheet.create({
  Container: {
    top: 15,
  },
  Separator: {
    height: 10,
  },
});
