import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Button, } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import AddPlayerView from './AddPlayerView.js'
import AddCourseView from './AddCourseView.js'
import SettingsView from './SettingsView.js'
import NewRoundView from './NewRoundView.js'
import StatisticsView from './StatisticsView.js'
import ChooseCourseView from './ChooseCourseView'
import ChoosePlayersView from './ChoosePlayersView'

class MainMenuView extends React.Component {

  static navigationOptions = {
    title: "DISC GOLF SCORECARD",

  }
  render() {

    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <View style={styles.menuButtonContainer}>
          <Button
            title="NEW ROUND"
            buttonStyle={styles.menuButton}
            large
            iconRight={{ name: "border-color" }}
            onPress={() => this.props.navigation.navigate('NewRound')} />
          <Button
            title="ADD PLAYER"
            buttonStyle={styles.menuButton}
            iconRight={{ name: "user-plus", type: "feather" }}
            onPress={() => this.props.navigation.navigate('AddPlayer')} />
          <Button
            title="ADD COURSE"
            buttonStyle={styles.menuButton}
            iconRight={{ name: "add-to-list", type: "entypo" }}
            onPress={() => this.props.navigation.navigate('AddCourse')} />
          <Button
            title="STATISTICS"
            buttonStyle={styles.menuButton}
            iconRight={{ name: "graph-bar", type: "foundation" }}
            onPress={() => this.props.navigation.navigate('Statistics')} />
          <Button
            title="SETTINGS"
            buttonStyle={styles.menuButton}
            iconRight={{ name: "settings" }}
            onPress={() => this.props.navigation.navigate('Settings')} />
        </View>
      </View>
    );
  }
}

export default createStackNavigator(
  {
    MainMenu: MainMenuView,
    NewRound: NewRoundView,
    AddPlayer: AddPlayerView,
    AddCourse: AddCourseView,
    Statistics: StatisticsView,
    Settings: SettingsView,
    ChoosePlayers: ChoosePlayersView,
    ChooseCourse: ChooseCourseView
  },
  {
    initialRouteName: 'MainMenu',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5998ff',
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'normal'
      }
    }
  }
)
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menuButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bgImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  header: {
    backgroundColor: "#5998ff"
  },
  headerText: {
    color: '#fff',
    fontSize: 24
  },
  menuButton: {
    marginVertical: 10,
    backgroundColor: "#5998ff"
  }
});
