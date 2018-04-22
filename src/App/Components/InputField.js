import React, {Component} from 'react';

import CustomTextInput from './CustomTextInput';

/**
 * Custom input field used for text entry.
 * All props are passed to TextInput, placeholder and onChange
 * have default values.
 */
export default class InputField extends Component {
  /**
   * @return {React.Node} styled input field
   */
  render() {
    return (
      <CustomTextInput search={false} {...this.props} />
    );
  }
}
