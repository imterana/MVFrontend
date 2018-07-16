import React, {Component} from 'react';
import {View, StyleSheet, ListView} from 'react-native';
import {Link} from 'RouterWrapper';
import PropTypes from 'prop-types';

import {DefaultText} from 'Components/Text';
import {NavigationScreen} from 'Navigation';
import {IconSymbol} from 'Components';
import StyleConstants from 'StyleConstants';

const listElement = ({name, url}) => (
          <Link to={url}>
            <DefaultText>
              {name}
            </DefaultText>
          </Link>
);

listElement.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

/**
 * A root demo screen with links to subpages.
 * @class DemoIndexScreen
 */
export default class DemoIndexScreen extends Component {
  /**
   * Initializes the table with pages provided from props.
   * @param {Props} props - the props.
   */
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2)=>r1!==r2,
      sectionHeaderHasChanged: (r1, r2)=>r1!==r2,
    });
    this.ds = ds.cloneWithRows(this.props.routes);
  }

  static propTypes = {
    // An array containing objects with fields 'name' and 'url'.
    routes: PropTypes.array,
  }

  /**
   * @return {React.Node} A screen with subpages.
   */
  render() {
    console.log(this.props.routes);
    return (
      <NavigationScreen hamburger>
        <View style={style.container}>
          <DefaultText>Home Screen</DefaultText>
          <IconSymbol name='html-five' />
          <ListView
            renderRow={listElement}
            dataSource={this.ds}
            contentContainerStyle={style.list}
          />
        </View>
      </NavigationScreen>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: StyleConstants.BACKGROUND_COLOR,
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
