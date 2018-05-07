import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

/**
 * A touchable opacity that leads to host,
 * but outside SPA, bypassing the router.
 * @class BackendLink
 */
export default class BackendLink extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    href: PropTypes.string,
    style: PropTypes.any,
  }

  static defaultProps = {
    style: {},
  }

  /**
   * Opens a url bypassing the router.
   * @param {string} url - the url to visit.
   */
  static goToLink(url) {
    window.location = url;
  }

  /**
   * @return {React.Node} a clickable link component.
   */
  render() {
    const {children, href, style} = this.props;
    const onPress = BackendLink.goToLink.bind(this, href);
    return (
      <TouchableOpacity onPress={onPress} style={style}>
        {children}
      </TouchableOpacity>
    );
  }
}
