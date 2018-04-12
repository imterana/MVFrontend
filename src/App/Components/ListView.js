import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListView, Text, TouchableOpacity} from 'react-native';

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
      <Text>{title}</Text>
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
          {sectionData && <SectionHeader title={sectionData.title} />}
         }
         renderRow={(data)=>
           <ListRow {...data}/>
         }
         {...this.props}
      />
    );
  }
}
