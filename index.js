/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigator from './src/navigations';

AppRegistry.registerComponent(appName, () => Navigator);
