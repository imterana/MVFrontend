import {AppRegistry} from 'react-native';
import App from './src/App/App';

/**
 * Component provider for React Native.
 * @return {React.Component} - The App component.
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
