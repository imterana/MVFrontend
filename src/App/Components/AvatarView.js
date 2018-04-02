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
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <Image source={pic} style={style.banana}/>
    );
  }
}
