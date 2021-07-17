import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import Navigator from './src/navigations';

if (module.hot) {
    module.hot.accept();
}

const iconFontStyles = `@font-face {
    src: url(${iconFont});
    font-family: FontAwesome;
  }`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
} else {
    style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

AppRegistry.registerComponent(appName, () => Navigator);
AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById('root'),
});