import { AppRegistry, YellowBox } from 'react-native';
import MainMenu from './src/views/MainMenuView';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('discgolfscorecard', () => MainMenu);
