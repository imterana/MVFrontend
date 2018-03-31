import {AppRegistry} from 'react-native';
import App from './src/App/App';

AppRegistry.registerComponent('MarkAsVisited', () => App);

if (window.document) {
  AppRegistry.runApplication('MarkAsVisited', {
    initialProps: {},
    rootTag: document.getElementById('root'),
  });
}
