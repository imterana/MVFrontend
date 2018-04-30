import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListView, Text, TouchableOpacity, View} from 'react-native';
import StyleConstants from '../StyleConstants';

/**
 * A pressable list row element with custom title.
 * @class ListRow
 */
class ListRow extends Component {
  static propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
  }

  /**
   * @return {React.Node} A list element with specified title and onpress.
   */
  render() {
    const {title, onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={{flexDirection: 'row', height: 65, marginLeft: 10, marginRight: 10, marginTop: 20, borderRadius: 5, borderColor: 'grey',
    borderWidth: 1}}>
          <View style={{backgroundColor: StyleConstants.ALT_BACKGROUND_COLOR, flex: 0.01, borderRadius: 10}}/>
          <View style={{flexDirection: 'column', marginLeft: 10}}> 
            <View style={{flex: 1, alignItems: 'center', flexDirection: 'column'}}>
              <Text>{title}</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', flexDirection: 'column'}}>
              <Text style={{color: 'grey'}}>{title}</Text>
            </View>  
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

/**
 * A section header component for the list.
 * @class SectionHeader
 */
class SectionHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  /**
   * @return {React.Node} A section header with the title.
   */
  render() {
    const {title} = this.props;
    return (
      <Text>{title}</Text>
    );
  }
}

/**
 * A styled list component with a DataSource.
 * @class DefaultListView
 */
export default class DefaultListView extends Component {
  /**
   * @return {React.Node} a styled list component
   */
  render() {
    return (
      <ListView
        renderHeader={(sectionData)=>
          {sectionData && <SectionHeader title={sectionData.title} />}}
         renderRow={(data)=>
           <ListRow {...data}/>
         }
         {...this.props}
      />
    );
  }
}
