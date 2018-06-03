import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Button, Icon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import { Header } from 'react-navigation';


export default class AddPlayerView extends React.Component {
    constructor() {
      super();
      this.state = {
        image: null,
      };
    }
    static navigationOptions = {
        title: "ADD PLAYER",
      }
    pickSingleImage(){
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true
      }).then(image => {
        console.log(image);
        this.setState({
          image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
          images: null
        });
      })
    }
    renderImage(image){
      return <Image style={{width: 300, height: 300, resizeMode: 'contain'}} source={image} />
    }  
      
    render() {
        return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.avatarContainer}>
              {this.state.image != null ? this.renderImage(this.state.image) : null}
            </View>
            <View style={styles.addPlayerForm}>
            <Button 
                title="Add avatar"
                buttonStyle={styles.menuButton}
                iconRight={{name:"user-plus", type:"feather"}}
                onPress = {() => this.pickSingleImage()}
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
    flex: 1,
  },
  addPlayerForm:{
    flex:6,
    justifyContent: "flex-end",
  },
  avatarContainer:{
    marginTop: Header.HEIGHT,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
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
