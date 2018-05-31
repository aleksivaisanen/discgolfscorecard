import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements';


export default class MainMenuView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Image
        source={require("../assets/images/mainmenubackground.png")}
        style={styles.bgImage}
        />
        <Header 
          centerComponent={{text: 'DISC GOLF SCORECARD', style: styles.headerText }}
          outerContainerStyles={styles.header}
        />
        <View style={styles.menuButtonContainer}>
          <Button 
            title="NEW ROUND"
            buttonStyle={styles.menuButton}
            large
            iconRight={{name:"border-color"}}/>
          <Button 
            title="STATISTICS"
            buttonStyle={styles.menuButton}
            large
            iconRight={{name:"graph-bar", type:"foundation"}}/>
          <Button 
            title="SETTINGS"
            buttonStyle={styles.menuButton}
            large
            iconRight={{name:"settings"}}/>        
        </View>
      </View>
    );
  }
}

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
    borderBottomWidth : 0,
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
