import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AvatarView extends Component {
  static propTypes = {
    style: PropTypes.any,
    userId: Proptypes.string,
  }
  
  static defaultProps = {
    style: null,
  }

  render() {
    return (
      null
    );
  }
}
