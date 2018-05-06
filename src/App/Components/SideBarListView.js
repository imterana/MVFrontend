import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListView, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import StyleConstants from '../StyleConstants';
import {IconSymbol} from '../Components';

/**
 * A pressable list row element with custom title.
 * @class ListRow
 */
class ListRow extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onPress: PropTypes.func,
  }

  /**
   * @return {React.Node} A list element with specified title and onpress.
   */
  render() {
    const {title, subtitle, onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.rowContainer}>
          <View style={styles.stick}/>
          <View style={styles.infoContainer}> 
            <View style={styles.title}>
              <Text>{title}</Text>
            </View>
            <View style={styles.subtitle}>
              <Text style={{color: 'grey'}}>{subtitle}</Text>
            </View>  
          </View>
          <View style={styles.iconContainer}>
            <IconSymbol name='circle-right' style={styles.icon}/>
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
      <View style={styles.headerContainer}>
        <Text style={{color: 'grey'}}>{title}</Text>
      </View> 
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

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row', 
    height: 65, 
    marginLeft: 10, 
    marginRight: 10, 
    marginTop: 10, 
    borderRadius: 5, 
    borderColor: StyleConstants.BORDER_COLOR,
    borderWidth: 1, 
    backgroundColor: 'white',
  },
  stick: {
    backgroundColor: StyleConstants.ALT_BACKGROUND_COLOR, 
    width: 5, 
    borderRadius: 5,
  },
  infoContainer: {
    flexDirection: 'column', 
    marginLeft: 10, 
    marginTop: 8, 
    flex: 1,
  },
  title: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'center',
  },
  subtitle: {
    flex: 1, 
    flexDirection: 'column',
  },
  iconContainer: {
    flex: 0, 
    flexDirection: 'column', 
    justifyContent: 'center', 
    marginRight: 20,
  },
  icon: {
    color: StyleConstants.ALT_BACKGROUND_COLOR,
  },
  headerContainer: {
    flex: 1, 
    flexDirection: 'column', 
    height: 50,
  },
});