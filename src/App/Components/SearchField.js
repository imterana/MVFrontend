import React, {Component} from 'react';

import CustomTextInput from './CustomTextInput';

/**
 * Custom search field used for search.
 * All props are passed to TextInput, placeholder and onChange
 * have default values.
 */
export default class SearchField extends Component {
  /**
   * @return {React.Node} styled input field
   */
  render() {
    return (
      <CustomTextInput search={true} {...this.props} />
    );
  }
}
