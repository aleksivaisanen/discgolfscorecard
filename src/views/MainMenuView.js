import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { createStackNavigator} from 'react-navigation';
import AddPlayerView from './AddPlayerView.js'


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
            iconRight={{name:"border-color"}}/>
          <Button 
            title="ADD PLAYER"
            buttonStyle={styles.menuButton}
            iconRight={{name:"user-plus", type:"feather"}}
            onPress={()=> this.props.navigation.navigate('AddPlayer')}/>
          <Button 
            title="ADD COURSE"
            buttonStyle={styles.menuButton}
            iconRight={{name:"add-to-list", type:"entypo"}}/>
          <Button 
            title="STATISTICS"
            buttonStyle={styles.menuButton}
            iconRight={{name:"graph-bar", type:"foundation"}}/>
          <Button 
            title="SETTINGS"
            buttonStyle={styles.menuButton}
            iconRight={{name:"settings"}}/>        
        </View>
      </View>
    );
  }
}

export default createStackNavigator(
  {
  MainMenu: MainMenuView,
  AddPlayer: AddPlayerView,
  },
  {
    initialRouteName: 'MainMenu',
    navigationOptions: {
      headerStyle : {
        backgroundColor: '#5998ff',
      },
      headerTintColor: "#fff",
      headerTitleStyle:{
        color:'#fff',
        fontSize:24,
        fontWeight:'normal'
      }
    }
  }
)
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menuButtonContainer:{
    flex:1,
    justifyContent: "flex-end",
  },
  bgImage : {
    flex: 1,
    position: "absolute",
    width:"100%",
    height:"100%",
    resizeMode: "cover"
  },
  header : {
    backgroundColor:"#5998ff"
  },
  headerText:{
    color:'#fff',
    fontSize:24
  },
  menuButton : {
    marginVertical : 10,
    backgroundColor:"#5998ff"
  }
});
