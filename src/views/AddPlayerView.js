import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Button, Icon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker'


export default class AddPlayerView extends React.Component {
    static navigationOptions = {
        title: "ADD PLAYER",
      }    
    render() {
        return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.addPlayerForm}>
            <Button 
                title="Add avatar"
                buttonStyle={styles.menuButton}
                iconRight={{name:"user-plus", type:"feather"}}
                />
            
            <FormLabel>Name</FormLabel>
            <FormInput/>
            <Button 
                title="ADD PLAYER"
                buttonStyle={styles.menuButton}
                iconRight={{name:"user-plus", type:"feather"}}/>
            
            </View>
        </View>
        );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  addPlayerForm:{
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
