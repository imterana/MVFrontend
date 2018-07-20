import {AppRegistry} from 'react-native';
import App from './src/App/App';

/**
 * Component provider function for AppRegistry.
 * @return {React.Component} - the application.
 */
function componentProvider() {
  return App;
}

AppRegistry.registerComponent('MarkAsVisited', componentProvider);

if (window.document) {
  AppRegistry.runApplication('MarkAsVisited', {
    initialProps: {},
    rootTag: document.getElementById('root'),
  });
}
