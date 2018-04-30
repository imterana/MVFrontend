66ae6464  1) import React, {Component} from 'react';
66ae6464  2) import PropTypes from 'prop-types';
66ae6464  3) import {ListView, Text, TouchableOpacity} from 'react-native';
66ae6464  4) 
66ae6464  5) /**
66ae6464  6)  * A pressable list row element with custom title.
66ae6464  7)  * @class ListRow
66ae6464  8)  */
66ae6464  9) class ListRow extends Component {
66ae6464 10)   static propTypes = {
66ae6464 11)     title: PropTypes.string,
66ae6464 12)     onPress: PropTypes.func,
66ae6464 13)   }
66ae6464 14) 
66ae6464 15)   /**
66ae6464 16)    * @return {React.Node} A list element with specified title and onpress.
66ae6464 17)    */
66ae6464 18)   render() {
66ae6464 19)     const {title, onPress} = this.props;
66ae6464 20)     return (
66ae6464 21)       <TouchableOpacity onPress={onPress}>
66ae6464 22)       <Text>{title}</Text>
66ae6464 23)       </TouchableOpacity>
66ae6464 24)     );
66ae6464 25)   }
66ae6464 26) }
66ae6464 27) 
66ae6464 28) /**
66ae6464 29)  * A section header component for the list.
66ae6464 30)  * @class SectionHeader
66ae6464 31)  */
66ae6464 32) class SectionHeader extends Component {
66ae6464 33)   static propTypes = {
66ae6464 34)     title: PropTypes.string,
66ae6464 35)   }
66ae6464 36) 
66ae6464 37)   /**
66ae6464 38)    * @return {React.Node} A section header with the title.
66ae6464 39)    */
66ae6464 40)   render() {
66ae6464 41)     const {title} = this.props;
66ae6464 42)     return (
66ae6464 43)       <Text>{title}</Text>
66ae6464 44)     );
66ae6464 45)   }
66ae6464 46) }
66ae6464 47) 
66ae6464 48) /**
66ae6464 49)  * A styled list component with a DataSource.
66ae6464 50)  * @class DefaultListView
66ae6464 51)  */
66ae6464 52) export default class DefaultListView extends Component {
66ae6464 53)   /**
66ae6464 54)    * @return {React.Node} a styled list component
66ae6464 55)    */
66ae6464 56)   render() {
66ae6464 57)     return (
66ae6464 58)       <ListView
66ae6464 59)         renderHeader={(sectionData)=>
00000000 60)           {sectionData && <SectionHeader title={sectionData.title} />}}
66ae6464 61)          renderRow={(data)=>
66ae6464 62)            <ListRow {...data}/>
66ae6464 63)          }
66ae6464 64)          {...this.props}
66ae6464 65)       />
66ae6464 66)     );
66ae6464 67)   }
66ae6464 68) }
